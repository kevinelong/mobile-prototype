from flask import Flask, jsonify, request, session
import psycopg2
import psycopg2.extras

app = Flask(__name__)
app.secret_key = b'whatever'

conn = psycopg2.connect(
    host="localhost",
    database="vita",
    user="postgres",
    password="beer")
conn.autocommit = True


@app.route("/user")
def user():
    if "username" not in session:
        return "not logged in"
    cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cursor.execute('SELECT * FROM vita."user";')
    return jsonify(cursor.fetchall())


@app.route("/register", methods=['POST'])
def register():
    cur = conn.cursor()
    # if request.method == 'POST':
    # try:

    sql = f'''
        INSERT INTO vita."user" (
            display_name,
            email,
            password
        ) VALUES (
            '{request.form["display_name"]}',
            '{request.form["email"]}',
            '{request.form["password"]}'
        );
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
        <input name="email" placeholder="email">
        <input name="password"  placeholder="password" type="password">
        <input type="submit" value="Register">
    </form>
    '''


@app.route("/login")
def login():
    return '''
    <form action="/validate" method="post">
        <input name="display_name" placeholder="display_name">
        <input name="password"  placeholder="password" type="password">
        <input type="submit" value="Login">
    </form>
    '''


@app.route("/validate", methods=['POST'])
def validate():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    # if request.method == 'POST':
    # try:

    sql = f'''
        SELECT password, email
        FROM vita.user
        WHERE display_name = '{request.form["display_name"]}';
        '''
    # ('{request.form["display_name"]}', '{request.form["email"]}', '{request.form["password"]}')

    cursor.execute(sql)

    user = cursor.fetchone()
    if not user:
        return "user not found"
    if request.form["password"] == user["password"]:
        session["username"] = user["email"]
        return "valid"
    return "invalid password: " + cursor.statusmessage
    # except:
    #     return "registration error"


@app.route("/logout")
def logout():
    del session["username"]
    return "logged out"


@app.route("/activity", methods=["GET", "POST", "PUT", "DELETE"])  # CRUD
def activity():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    if request.method == 'GET':  # GET ALL
        cursor.execute(f'''SELECT * FROM vita."activity";''')
        return jsonify(cursor.fetchall())
    elif request.method == 'POST':  # INSERT
        sql = f'''
        INSERT INTO vita."activity" (
            title,
            description,
            image_url,
            lat,
            lng,
            region_id
        ) VALUES (
            '{request.form["title"]}',
            '{request.form["description"]}',
            '{request.form["image_url"]}',
            '{request.form["lat"]}',
            '{request.form["lng"]}',
            '{request.form["region_id"]}'
            );
        '''
        cursor.execute(sql)
        return cursor.statusmessage
    elif request.method == 'PUT':  # UPDATE
        sql = f'''UPDATE vita."activity" SET
            title = '{request.form["title"]}',
            description = '{request.form["description"]}',
            image_url = '{request.form["image_url"]}',
            lat = '{request.form["lat"]}',
            lng = '{request.form["lng"]}',
            region_id = '{request.form["region_id"]}'
        WHERE id = {request.form["id"]};'''
        cursor.execute(sql)
        return cursor.statusmessage
    elif request.method == 'DELETE':  # DEACTIVATE?
        cursor.execute(f'''DELETE * FROM vita."activity" WHERE id={request.form["id"]}''')
        return cursor.statusmessage

    return "bad request"


@app.route("/event", methods=["GET", "POST", "PUT", "DELETE"])  # CRUD
def event():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    if request.method == 'GET':  # GET ALL
        cursor.execute(f'''SELECT * FROM vita."event";''')
        return jsonify(cursor.fetchall())
    elif request.method == 'POST':  # INSERT
        sql = f'''
        INSERT INTO vita."event" (
            name,
            when,
            plan_id,
            activity_id,
        ) VALUES (
            '{request.form["name"]}',
            '{request.form["when"]}',
            '{request.form["plan_id"]}'
            '{request.form["activity_id"]}'
            );
        '''
        cursor.execute(sql)
        return cursor.statusmessage
    elif request.method == 'PUT':  # UPDATE
        sql = f'''UPDATE vita."event" SET
            name = '{request.form["name"]}',
            when = '{request.form["when"]}',
            plan_id = '{request.form["plan_id"]}',
            activity_id = '{request.form["activity_id"]}'
        WHERE id = {request.form["id"]};'''
        cursor.execute(sql)
        return cursor.statusmessage
    elif request.method == 'DELETE':  # DEACTIVATE?
        cursor.execute(f'''DELETE * FROM vita."event" WHERE id={request.form["id"]}''')
        return cursor.statusmessage

    return "bad request"


app.run(debug=True, ssl_context='adhoc')
