"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, ToDos, Contacts, Memos
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=["GET"])
def handle_users():
    users=User.query.all()
    serialized_users = []
    for user in users:
        user = user.serialize()
        serialized_users.append(user)
    response_body = {
        "message": "These are all of the users",
        "users": serialized_users
    }
    return jsonify(response_body), 200

@api.route('/todos', methods=['GET'])
def handle_get_todos():
    current_user_id = 1
    user = User.query.get(current_user_id)

    if user:
        todos = []
        for x in user.todos:
            todos.append(x.serialize())
        return jsonify(todos), 200
    
@api.route('/todos', methods=['POST'])
def handle_add_todos():
    current_user_id = 1
    user = User.query.get(current_user_id)

    if user:
        status = request.json.get('staus', None)
        task = request.json.get('task', None)
        notes = request.json.get('notes', None)
        new_todo = ToDos(status = status, task = task, notes = notes, user_id = current_user_id)
        db.session.add(new_todo)
        db.session.commit()
        return jsonify('Added task'), 200
    
@api.route('/todos/<int:todo_id>', methods=['PUT','DELETE'])
def handle_modify_todos(todo_id):
    current_user_id = 1
    user = User.query.get(current_user_id)
    task_item = ToDos.query.get(todo_id)
    method = request.method

    if user and task_item:
        if method == 'PUT':
            new_status = request.json.get('staus', None)
            new_notes = request.json.get('notes', None)
            if new_status:
                task_item.status = new_status
            if new_notes:
                task_item.notes = new_notes
            db.session.commit()
            return jsonify('Editted task'), 200
        elif method == 'DELETE':
            task_to_delete = ToDos.query.filter_by(id = todo_id).first()
            if task_to_delete:
                db.session.delete(task_to_delete)
                db.session.commit()
                return jsonify('Deleted task'), 200