import json
with open("country-state.json") as file:
        country_state = json.load(file)
        for key, value in country_state.items():
            print(key,value)
    
    
        