from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token

app = Flask(__name__)
api = Api(app)
CORS(app)
jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = 's3cr3t-k3y_f0r_my_@pp!' 
from home import Home;
api.add_resource(Home, '/')


from login import Login;
api.add_resource(Login, '/login')

from register import Register
api.add_resource(Register, '/register')

from users import Users
api.add_resource(Users, '/users')

if __name__ == '__main__':
    app.run(debug=True)
