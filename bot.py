import logging
from aiogram import Bot, Dispatcher, executor
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram import types
import sql_manager
from keyboards import *
from states import FSM_Assets, FSM_Spending, FSM_Cash
from config import token

storage = MemoryStorage()

logging.basicConfig(level=logging.INFO)

bot = Bot(token=token)
dp = Dispatcher(bot, storage=storage)


async def on_startup(_):
    await sql_manager.connect()


@dp.message_handler(Command('start'))
async def send_welcome(message: types.Message):
    await message.answer("Выберите действие:", reply_markup=create_main_menu_keyboard(message.from_user.id))
    await sql_manager.check_for_tables_existence(message.from_user.id)


@dp.message_handler(Command('Активы'))
async def enter_stock_name(message: types.Message):
    await message.reply("Название актива:", reply_markup=cancel_keyboard)
    await sql_manager.check_for_tables_existence(message.from_user.id)
    await FSM_Assets.stock_name.set()


@dp.message_handler(Command('Расходы'))
async def enter_spent_amount(message: types.Message):
    await message.reply("Сколько потратил?", reply_markup=cancel_keyboard)
    await sql_manager.check_for_tables_existence(message.from_user.id)
    await FSM_Spending.spent_amount.set()


@dp.message_handler(Command('Пополнение'))
async def add_cash(message: types.Message):
    await message.reply("Сколько пополнил?", reply_markup=cancel_keyboard)
    await sql_manager.check_for_tables_existence(message.from_user.id)
    await FSM_Cash.cash.set()


# FSM Assets part
@dp.message_handler(state=FSM_Assets.stock_name)
async def get_stock_name(message: types.Message, state: FSMContext):
    answer = message.text

    if answer != cancel_button.text:
        async with state.proxy() as data:
            data['stock_name'] = answer
        await FSM_Assets.next()
        await message.answer("Количество:", reply_markup=cancel_keyboard)

    else:
        await state.reset_state(with_data=False)
        await send_welcome(message)


@dp.message_handler(state=FSM_Assets.quantity)
async def get_quantity(message: types.Message, state: FSMContext):
    answer = message.text

    if answer != cancel_button.text:
        try:
            async with state.proxy() as data:
                await sql_manager.insert_into_assets(message.from_user.id, data['stock_name'], int(answer))
            await message.answer("Добавлено")

        except ValueError:
            await message.answer(text="Необходимо число")

    await send_welcome(message)
    await state.reset_state(with_data=False)


# FSM Spending part
@dp.message_handler(state=FSM_Spending.spent_amount)
async def get_spent_amount(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        try:
            async with state.proxy() as data:
                data['spent_amount'] = int(answer)
            await FSM_Spending.next()

            categories = await sql_manager.get_categories(message.from_user.id)
            await message.answer("Выберите категорию:", reply_markup=create_categories_keyboard(categories))

        except ValueError:
            await message.answer(text="Необходимо число")
            await send_welcome(message)
            await state.reset_state(with_data=False)

    else:
        await state.reset_state(with_data=False)
        await send_welcome(message)


@dp.message_handler(state=FSM_Spending.category)
async def get_category(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        async with state.proxy() as data:
            data['category'] = answer
            category_check =  await sql_manager.get_categories(message.from_user.id)
            if answer not in category_check:
                await message.answer("Будете добавлять категорию в клавиатуру ?",reply_markup=markup4)
                await FSM_Spending.next()
    else:
        await send_welcome(message)
        await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_Spending.answer)
async def get_answer(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        async with state.proxy() as data:
            if answer == "Да":
                await sql_manager.insert_into_categories(message.from_user.id, data['category'])
                await FSM_Spending.next()
                await message.answer("Что вы купили:", reply_markup=cancel_keyboard)

            if message.text == "Нет":
                await FSM_Spending.next()
                await message.answer("Что вы купили:", reply_markup=cancel_keyboard)

    else:
        await send_welcome(message)
        await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_Spending.commentary)
async def get_commentary(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        async with state.proxy() as data:
            await sql_manager.change_cash_minus(message.from_user.id, data['spent_amount'])
            await sql_manager.insert_into_spending(message.from_user.id, data['spent_amount'], data['category'], answer)
        await message.answer("Добавлено")

    await send_welcome(message)
    await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_Cash.cash)
async def get_cash_amount(message: types.Message, state: FSMContext):
    answer = message.text
    try:
        if answer != cancel_button.text:
            await sql_manager.change_cash_plus(message.from_user.id, int(answer))
            await message.answer("Добавлено")

    except ValueError:
        await message.answer(text="Необходимо число")

    finally:
        await send_welcome(message)
        await state.reset_state(with_data=False)


if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True, on_startup=on_startup)
