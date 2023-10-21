from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo


def create_main_menu_keyboard(user_id):
    assets_button = KeyboardButton('/Активы')
    expenses_button = KeyboardButton('/Расходы')
    replenish_button = KeyboardButton('/Пополнение')
    statistics_button = KeyboardButton('/Статистика', web_app=WebAppInfo(url=f"https://google.com/{user_id}"))

    main_menu_keyboard = ReplyKeyboardMarkup(row_width=1, resize_keyboard=True, input_field_placeholder="Выберите "
                                                                                                        "действие")
    main_menu_keyboard.add(assets_button, expenses_button, replenish_button, statistics_button)

    return main_menu_keyboard


categories_keyboard = ReplyKeyboardMarkup(row_width=1, resize_keyboard=True,
                                          input_field_placeholder="Выберите категорию")

cancel_keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
cancel_button = KeyboardButton(text="Отменить")
cancel_keyboard.add(cancel_button)
