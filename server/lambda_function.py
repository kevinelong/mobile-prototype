import json
from orm import ApiDatabase


def lambda_handler(event, context):
    db = ApiDatabase()
    activity_model = db.addModel("activity", ["id", "title", "description", "image_url", "lat", "lng", "region_id"])
    activity_model.create_table()
    activity_model.create({
        "title": "tt",
        "description": "dd",
        "image_url": "ii",
        "lat": 0,
        "lng": 0,
        "region_id": 1
    })

    # return jsonify(db.models[request.args.get("model")].route(request.method, request.form))

    return {
        'statusCode': 200,
        'body': json.dumps(activity_model.read())
    }
