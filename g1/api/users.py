from db import mdb
from flask_restful import Resource

class Users(Resource):
    def get(self):
        users = []
        for item in mdb.users.find({}):
            users.append(item)
    
        return {
            "status" : 1,
            "cls": "success",
            "msg": "Login API",
            "payload": {
                "users": users,
            }
        }