import logging
from aiogram import Bot, Dispatcher, executor
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters import Command
from aiogram import types
from states import FSM_Assets, FSM_Spending, FSM_Cash
from config import token

storage = MemoryStorage()

logging.basicConfig(level=logging.INFO)

bot = Bot(token=token)
dp = Dispatcher(bot, storage=storage)


async def on_startup(_):
    print('start')


@dp.message_handler(Command('start'))
async def send_welcome(message: types.Message):
    await message.answer("Выберите действие:", reply_markup=main_menu_keyboard)


@dp.message_handler(Command('Активы'))
async def enter_stock_name(message: types.Message):
    await message.reply("Название актива:", reply_markup=cancel_keyboard)
    await FSM_Assets.stock_name.set()


@dp.message_handler(Command('Расходы'))
async def enter_spent_amount(message: types.Message):
    await message.reply("Сколько потратил?", reply_markup=cancel_keyboard)
    await FSM_Spending.spent_amount.set()


@dp.message_handler(Command('Пополнение'))
async def add_cash(message: types.Message):
    await message.reply("Сколько пополнил?", reply_markup=cancel_keyboard)
    await FSM_Cash.cash.set()


if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True, on_startup=on_startup)
