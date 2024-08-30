from flask import request
from flask_restful import Resource
from flask_jwt_extended import JWTManager, create_access_token

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
        
        if not dbuser:  # Check if dbuser is None (user not found)
            return {
                "status": 0,
                "cls": "danger",
                "msg": "User not found"
            }, 401  # Unauthorized

        # Now you can safely access dbuser["status"]
        if dbuser["status"] != "active":
            return {
                "status": 0,
                "cls": "danger",
                "msg": "Given email exists but the status is not active"
            }
            
        dbPswd = dbuser["password"]
        if password !=  dbPswd:
            # access_token = create_access_token(identity=email)
            return {
                "status": 0,
                "cls": "danger",
                "msg": "Login failed",
                "payload": {
                    "token": access_token
                }
            }
        else:
            access_token = create_access_token(identity=email)
            return {
                "status": 1,
                "cls": "success",
                "msg": "Login successful",
                "payload": {
                    "token": access_token
                }
            }
            
        print("dbuser: ",dbuser);

        #Step 2 Generate token
        # token="" #Use Flask JWT extended to generate token  
            
        return {
            "status" : 1,
            "cls": "success",
            "msg": "Login API",
            "payload": {
                "input": input
            }
        }