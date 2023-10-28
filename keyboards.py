from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup


assets_button = KeyboardButton('/Активы')
expenses_button = KeyboardButton('/Расходы')
replenish_button = KeyboardButton('/Пополнение')
change_categories = KeyboardButton('/Изменить_основные_категории')
statistics_button = KeyboardButton('/Статистика')
help_button = KeyboardButton('/Помощь')
main_menu_keyboard = ReplyKeyboardMarkup(row_width=1, resize_keyboard=True, input_field_placeholder="Выберите "
                                                                                                    "действие")
main_menu_keyboard.row(assets_button, expenses_button, replenish_button)
main_menu_keyboard.add(change_categories, statistics_button, help_button)


def create_statistic_keyboard(user_id):
    return InlineKeyboardMarkup().add(InlineKeyboardButton("Сайт", url=f"http://127.0.0.1:5000/profile/{user_id}"))


cancel_keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
cancel_button = KeyboardButton("Отменить")
cancel_keyboard.add(cancel_button)


def create_categories_keyboard(categories):
    categories_keyboard = ReplyKeyboardMarkup(row_width=1, resize_keyboard=True, input_field_placeholder="Выберите "
                                                                                                         "категорию")
    for category in categories:
        category_button = KeyboardButton(text=category)
        categories_keyboard.add(category_button)

    categories_keyboard.add(cancel_button)

    return categories_keyboard


yes_or_no_keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
yes_button = KeyboardButton('Да')
no_button = KeyboardButton('Нет')
yes_or_no_keyboard.row(yes_button, no_button)


add_or_delete_keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
add_button = KeyboardButton('Добавить')
delete_button = KeyboardButton('Убрать')
add_or_delete_keyboard.row(add_button, delete_button)
add_or_delete_keyboard.add(cancel_button)

text = """ Телеграмм бот (finance tracker), который позволяет пользователям отслеживать свои финансы, предоставляя информацию о расходах и активах. (Бот; сайт для статистики)\n

Если вы ещё не ознакомлены с функционалом нашего бота, то нажмите кнопку "/Помощь" и внимательно изучите."""


text_help = """/start" - запускает работу нашего бота\n
"/Активы" - позволяет пользователю добавлять в базу данных различные активы и их количество.\n
"/Расходы" - позволяет пользователю добавлять в базу данных категорию трат, количество потраченных денег и саму покупку.\n
"./Пополнение" - позволяет пользователю указать в базу данных, сколько денег у него ещё появилось\n
"/Изменить_основные_категории" - позволяет добавлять или убирать кнопки категорий, не добавляя данных по тратам.\n
"/Статистика" - перенаправляет пользователя на персональную для пользователя страницу нашего сайта. На сайте пользователь может посмотреть статистику при помощи диаграмм, графиков и таблиц."""
