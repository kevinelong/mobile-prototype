from flask import Flask, jsonify, request, session
from orm_my import ApiDatabase, ApiModel

app = Flask(__name__)
app.secret_key = b'whatever'

db = ApiDatabase()
activity_model = db.addModel("activity", ["id", "title", "description", "image_url", "lat", "lng", "region_id"])
event_model = db.addModel("event", ["id", "name", "when", "plan_id", "activity_id"])
user_model = db.addModel("user", ["id", "display_name", "email", "password"])

activity_model.create_table()


@app.route("/activity", methods=["GET", "POST", "PUT", "DELETE"])
def activity():
    return jsonify(activity_model.route(request.method, request.form))


app.run(debug=True)
# app.run(debug=True, ssl_context='adhoc')
