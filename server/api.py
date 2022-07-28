from flask import Flask, jsonify, request, session
from orm import ApiDatabase, ApiModel
from dom import *

app = Flask(__name__)
app.secret_key = b'whatever'

db = ApiDatabase()
activity_model = ApiModel(db, "activity", ["id", "title", "description", "image_url", "lat", "lng", "region_id"])
event_model = ApiModel(db, "event", ["id", "name", "when", "plan_id", "activity_id"])
user_model = ApiModel(db, "user", ["id", "display_name", "email", "password"])

activity_model.create_table()


@app.route("/activity", methods=["GET", "POST", "PUT", "DELETE"])
def activity():
    return jsonify(activity_model.route(request.method, request.form))


@app.route("/event_new", methods=["GET"])
def event_new():
    return event_model.form()


@app.route("/event", methods=["GET", "POST", "PUT", "DELETE"])
def event():
    return jsonify(event_model.route(request.method, request.form))


@app.route("/user")
def user():
    if "username" not in session:
        return "not logged in"
    return jsonify(user_model.read())


@app.route("/user_list")
def user_list():
    if "username" not in session:
        return "not logged in"
    return Br().join(map(lambda m: Template("{id}, {display_name}, {email}", m), user_model.read()))


@app.route("/register", methods=['POST'])
def register():
    return jsonify(user_model.create(request.form))


@app.route("/validate", methods=['POST'])
def validate():
    record = user_model.read_one(request.form["display_name"], "display_name")

    if not record:
        return "record not found"

    if request.form["password"] == record["password"]:
        session["username"] = record["email"]
        return "valid"

    return "invalid password"


@app.route("/logout")
def logout():
    del session["username"]
    return "logged out"


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
    return Form("".join([
        Input("display_name", "", "input", 'placeholder="Name"'),
        Password("password", 'placeholder="Password"'),
        Submit("Login"),
    ]), 'action="/validate" method="post"')


app.run(debug=True)
# app.run(debug=True, ssl_context='adhoc')
