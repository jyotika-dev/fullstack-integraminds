# from flask import request
from flask import request
from flask_restful import Resource

from db import mdb

class Login(Resource):
    def post(self):
        # args = request.args
        # print('args:',args)
        
        '''
        - Given email not exists
        - Given email and password is incorrect
        - Given email exists but the status is not active
        - Both are correct -> return token
        
        -email
        -password
        -redirectURL
        
        '''
        
        input = request.get_json()
        print('input: ',input)
        
        
        # email = input.get("email")
        email = input[("email")]
        print('email: ',email)
        password = input.get("password")
        print('password: ',password)
        
        dbuser = mdb.users.find_one({"email": email})
        
        if not {dbuser and "_id" in dbuser}:
            return {
                "status" : 0,
                "cls": "danger",
                "msg": "Given email not exists",
                "payload": {"input": input, "dbuser": dbuser}
            }
            
        dbstatus = dbuser["status"]
        if dbstatus !=  "active":
            return {
                    "status" : 0,
                    "cls": "danger",
                    "msg": "Given email exists but the status is not active",
                    "payload": {"input": input, "dbuser": dbuser}
            }
            
        dbPswd = dbuser["password"]
        if password !=  dbPswd:
                return {
                    "status" : 0,
                    "cls": "danger",
                    "msg": "Given password is not correct",
                    "payload": {"input": input, "dbuser": dbuser}
                }
            
        print("dbuser: ",dbuser);

            
            
        return {
            "status" : 1,
            "cls": "success",
            "msg": "Login API",
            "payload": {
                "input": input
            }
        }