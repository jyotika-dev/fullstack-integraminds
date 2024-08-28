from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS


# from db import mdb

app = Flask(__name__)
api = Api(app)
CORS(app)

from home import Home;
api.add_resource(Home, '/')


from login import Login;
api.add_resource(Login, '/login')

# from register import Register
# api.add_resource(Register, '/register')

from users import Users
api.add_resource(Users, '/users')

if __name__ == '__main__':
    app.run(debug=True)
