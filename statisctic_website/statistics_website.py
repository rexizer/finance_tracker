# -*- coding: utf-8 -*-
from flask import Flask, render_template, g, url_for
import sqlite3
import json


app = Flask(__name__)

DATABASE = '../finance.db'


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


def check_table_exists(sql, table_name):
    sql.execute(f"SELECT name FROM sqlite_master WHERE type='table' AND name='{table_name}';")
    return sql.fetchone()


def get_data(sql, table_name):
    sql.row_factory = sqlite3.Row
    rows = sql.execute(f"SELECT * from {table_name}").fetchall()
    return json.dumps([dict(ix) for ix in rows], ensure_ascii=False)


@app.route('/profile/<int:user_id>')
def profile(user_id):
    assets_table = 'assets_' + str(user_id)
    spending_table = 'spending_' + str(user_id)

    sql = get_db().cursor()
    if check_table_exists(sql, spending_table):
        user_info = {
            'assets': get_data(sql, assets_table),
            'spending': get_data(sql, spending_table)
        }

        sql.close()
        return render_template('index.html', user_info=user_info)
    else:
        return page_not_found(404)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
