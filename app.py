from flask import Flask, jsonify, request
import psycopg2
import psycopg2.extras

app = Flask(__name__)
conn = psycopg2.connect(
    host="localhost",
    database="vita",
    user="postgres",
    password="beer")


@app.route("/user")
def user():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cursor.execute('SELECT * FROM vita."user";')
    return jsonify(cursor.fetchall())


@app.route("/register", methods=['POST'])
def register():
    cur = conn.cursor()
    # if request.method == 'POST':
    # try:

    sql = f'''
        INSERT INTO vita."user" (display_name, password) VALUES ('{request.form["display_name"]}', '{request.form["password"]}');
        '''

    cur.execute(sql)
    return cur.statusmessage
    # except:
    #     return "registration error"

@app.route("/reg")
def reg():
    return '''
    <form action="/register" method="post">
        <input name="display_name" placeholder="display_name">
        <input name="password"  placeholder="password" type="password">
        <input type="submit" value="Register">
    </form>
    '''
