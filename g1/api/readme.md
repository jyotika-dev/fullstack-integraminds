1. py -3 -m venv .venv
2. .venv/Scripts/activate
3. pip install Flask

# Packages
pip install Flask
pip install Flask-RESTful
pip install Flask-Cors
pip install pymongo

# Freeze Packages
pip freeze > requirements.txt

# Read and install from requirements.txt
pip install -r requirements.txt

# upgrade pip
pip install --upgrade pip

# Go to flask-restful documentation
https://flask-restful.readthedocs.io/en/latest/quickstart.html#a-minimal-api

1. Take the minimal sample code
2. Create a file called `api.py` inside the `projects/g1/api` folder

# to run 
- flask --app api run --host=0.0.0.0 --debug (for flask)
- python api.py (for python)

- app.config['JWT_SECRET_KEY'] = 's3cr3t-k3y_f0r_my_@pp!' 