from aiogram.types import ReplyKeyboardMarkup

main_menu_keyboard = ReplyKeyboardMarkup(row_width=1, resize_keyboard=True, input_field_placeholder="Выберите действие")
cancel_keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
