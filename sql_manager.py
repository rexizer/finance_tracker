import aiosqlite
from datetime import datetime


async def connect() -> None:
    global db, sql
    db = await aiosqlite.connect('finance.db')
    sql = await db.cursor()


async def check_for_tables_existence(user_id):
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

    await sql.execute(f"""CREATE TABLE IF NOT EXISTS categories_{user_id} (
            category TEXT
        )""")

    await sql.execute(f"SELECT EXISTS(SELECT stock_name FROM assets_{user_id} WHERE stock_name ='rub' LIMIT 1)")
    if (await sql.fetchone())[0] == 0:
        await insert_into_assets(user_id, 'rub', 0)

    await db.commit()


async def insert_into_assets(user_id, stock_name, quantity):
    await sql.execute(f"INSERT INTO assets_{user_id} VALUES(?, ?)", (f"{stock_name}", quantity))
    await db.commit()


async def insert_into_spending(user_id, spending, category, commentary):
    await sql.execute(f"INSERT INTO spending_{user_id} VALUES(?, ?, ?, ?)",
                      (f"{datetime.now()}", spending, category, commentary))
    await db.commit()


async def change_cash_plus(user_id, quantity):
    await sql.execute(f"UPDATE assets_{user_id} SET quantity = quantity + {quantity} WHERE stock_name = 'rub'")
    await db.commit()


async def change_cash_minus(user_id, quantity):
    await sql.execute(f"UPDATE assets_{user_id} SET quantity = quantity + {quantity * (-1)} WHERE stock_name = 'rub'")
    await db.commit()


async def insert_into_categories(user_id, category):
    categories = await get_categories(user_id)
    if category not in categories:
        await sql.execute(f"INSERT INTO categories_{user_id} VALUES(?)", (category,))
        await db.commit()


async def get_categories(user_id):
    await sql.execute(f"SELECT category FROM categories_{user_id}")
    categories = await sql.fetchall()
    return [category[0] for category in categories]
