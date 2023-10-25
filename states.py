from aiogram.dispatcher.filters.state import StatesGroup, State


class FSM_Assets(StatesGroup):
    stock_name = State()
    quantity = State()


class FSM_Spending(StatesGroup):
    spent_amount = State()
    category = State()
    consent_to_adding_button = State()
    commentary = State()


class FSM_Cash(StatesGroup):
    cash = State()


class FSM_ChangeCategories(StatesGroup):
    add_or_delete = State()
    add = State()
    delete = State()
