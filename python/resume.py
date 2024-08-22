#Task 5 
import json

with open("resume.json") as file:
    resume = json.load(file)
    for key, value in resume.items():
        print(key,value)
        
#TASK 6: Create a function and move this code inside the function and call for 5 times using loop

def resume():
    with open("resume.json") as file:
        resume = json.load(file)
    for key, value in resume.items():
        print(key,value)

for _ in range(5):
    resume()    

    
    