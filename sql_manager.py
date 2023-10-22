import aiosqlite
from datetime import datetime


async def connect() -> None:
    global db, sql
    db = await aiosqlite.connect('finance.db')
    sql = await db.cursor()


async def check_for_table_existence(user_id):
    await sql.execute(f"""CREATE TABLE IF NOT EXISTS spending_{user_id} (
            date TEXT,
            spending BIGINT,
            category TEXT,
            commentary TEXT
        )""")

    await sql.execute(f"""CREATE TABLE IF NOT EXISTS assets_{user_id} (
            stock_name TEXT,
            quantity BIGINT
        )""")


async def insert_into_assets(user_id, stock_name, quantity):
    await check_for_table_existence(user_id)
    await sql.execute(f"INSERT INTO assets_{user_id} VALUES(?, ?)", (f"{stock_name}", quantity))
    await db.commit()


async def insert_into_spending(user_id, spending, category, commentary):
    await check_for_table_existence(user_id)
    await sql.execute(f"INSERT INTO spending_{user_id} VALUES(?, ?, ?, ?)", (f"{datetime.now()}", spending, category, commentary))
    await db.commit()



async def change_quantity(user_id, quantity):
    await sql.execute(f"UPDATE assets_{user_id} SET quantity = quantity + {quantity} WHERE stock_name = 'rub'")
    await db.commit()

async def change_quantity_minus(user_id, quantity):
    await sql.execute(f"UPDATE assets_{user_id} SET quantity = quantity + {quantity * (-1)} WHERE stock_name = 'rub'")
    await db.commit()



