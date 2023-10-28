import logging
from aiogram import Bot, Dispatcher, executor, types
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram import types
import sql_manager
from keyboards import *
from states import *
from config import token

storage = MemoryStorage()

logging.basicConfig(level=logging.INFO)

bot = Bot(token=token)
dp = Dispatcher(bot, storage=storage)


async def on_startup(_):
    await sql_manager.connect()


async def send_selection_message(message: types.Message):
    await message.answer("Выберите действие:", reply_markup=main_menu_keyboard)


@dp.message_handler(Command('start'))
async def send_welcome(message: types.Message):
    await bot.pin_chat_message(chat_id=message.chat.id, message_id=(await message.answer(help_text)).message_id)
    await send_selection_message(message)
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


@dp.message_handler(Command('Изменить_основные_категории'))
async def change_main_categories(message: types.Message):
    await message.reply("Добавить или убрать категорию?", reply_markup=add_or_delete_keyboard)
    await sql_manager.check_for_tables_existence(message.from_user.id)
    await FSM_ChangeCategories.add_or_delete.set()


@dp.message_handler(Command('Статистика'))
async def send_statistic_website(message: types.Message):
    await message.reply("Статистика:", reply_markup=create_statistic_keyboard(message.from_user.id))


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
        await send_selection_message(message)


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

    await send_selection_message(message)
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
            await send_selection_message(message)
            await state.reset_state(with_data=False)
    else:
        await state.reset_state(with_data=False)
        await send_selection_message(message)


@dp.message_handler(state=FSM_Spending.category)
async def get_category(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        async with state.proxy() as data:
            data['category'] = answer

            categories = await sql_manager.get_categories(message.from_user.id)
            if answer not in categories:
                await message.answer("Будете добавлять категорию в клавиатуру?", reply_markup=yes_or_no_keyboard)
                await FSM_Spending.next()
            else:
                await message.answer("Что вы купили:", reply_markup=cancel_keyboard)
                await FSM_Spending.last()
    else:
        await send_selection_message(message)
        await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_Spending.consent_to_adding_button)
async def get_consent_to_adding_button(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        async with state.proxy() as data:
            if answer == yes_button.text:
                await sql_manager.insert_into_categories(message.from_user.id, data['category'])

            await FSM_Spending.next()
            await message.answer("Что вы купили:", reply_markup=cancel_keyboard)
    else:
        await send_selection_message(message)
        await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_Spending.commentary)
async def get_commentary(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        async with state.proxy() as data:
            await sql_manager.change_cash_minus(message.from_user.id, data['spent_amount'])
            await sql_manager.insert_into_spending(message.from_user.id, data['spent_amount'], data['category'], answer)
        await message.answer("Добавлено")

    await send_selection_message(message)
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
        await send_selection_message(message)
        await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_ChangeCategories.add_or_delete)
async def get_commentary(message: types.Message, state: FSMContext):
    answer = message.text
    match answer:
        case add_button.text:
            await message.answer("Напишите название категории, которую нужно добавить.",
                                 reply_markup=cancel_keyboard)
            await FSM_ChangeCategories.next()

        case delete_button.text:
            categories = await sql_manager.get_categories(message.from_user.id)
            await message.answer("Выберите категорию, которую нужно удалить:",
                                 reply_markup=create_categories_keyboard(categories))
            await FSM_ChangeCategories.last()

        case cancel_button.text:
            await send_selection_message(message)
            await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_ChangeCategories.add)
async def get_commentary(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        categories = await sql_manager.get_categories(message.from_user.id)
        if answer not in categories:
            await sql_manager.insert_into_categories(message.from_user.id, answer)
            await message.answer("Категория добавлена!")
        else:
            await message.answer("Категория уже есть в основных")

    await send_selection_message(message)
    await state.reset_state(with_data=False)


@dp.message_handler(state=FSM_ChangeCategories.delete)
async def get_commentary(message: types.Message, state: FSMContext):
    answer = message.text
    if answer != cancel_button.text:
        categories = await sql_manager.get_categories(message.from_user.id)
        if answer in categories:
            await sql_manager.delete_category(message.from_user.id, answer)
            await message.answer("Категория удалена!")
        else:
            await message.answer("Этой категории не было в основных")

    await send_selection_message(message)
    await state.reset_state(with_data=False)


if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True, on_startup=on_startup)
