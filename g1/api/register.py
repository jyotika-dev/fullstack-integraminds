# from flask import request
from flask import request
from flask_restful import Resource

from db import mdb

class Register(Resource):
    def post(self):
                
        input = request.get_json()
        print('input: ',input)
        
        
        # email = input.get("email")
        email = input[("email")]
        print('email: ',email)
        password = input.get("password")
        print('password: ',password)
        
        dbuser = mdb.users.find_one({"email": email})
        
        #Random number from 1000 to 9999
        import random
        random_number = random.randint(1000,9999)
        
        newUser = {
            "_id": random_number,
            "email": email,
            "password": password,
            "status": "active",
        }
        
        mdb.users.insert_one(newUser);
        
        

            
            
        return {
            "status" : 1,
            "cls": "success",
            "msg": "Login API",
            "payload": {
                "input": input, "newUser": newUser
            }
        }