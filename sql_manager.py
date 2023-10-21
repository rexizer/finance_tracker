import aiosqlite
from datetime import datetime


async def connect() -> None:
    global db, sql
    db = await aiosqlite.connect('finance.db')
    sql = await db.cursor()

    await sql.execute("""CREATE TABLE IF NOT EXISTS spending (
        date TEXT,
        spending BIGINT,
        category TEXT,
        commentary TEXT
    )""")

    await sql.execute("""CREATE TABLE IF NOT EXISTS assets (
        stock_name TEXT,
        quantity BIGINT
    )""")

    await db.commit()


async def insert_into_assets(stock_name, quantity):
    await sql.execute(f"INSERT INTO assets VALUES(?, ?)", (f"{stock_name}", quantity))
    await db.commit()


async def insert_into_spending(spending, category, commentary):
    await sql.execute(f"INSERT INTO spending VALUES(?, ?, ?, ?)", (f"{datetime.now()}", spending, category, commentary))
    await db.commit()
