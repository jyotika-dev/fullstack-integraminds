#Sample dict tp represent the complete student meta data

student = {
    "name": "John",
    "age": 24,
    "isStudent": True,
    "hobbies": ["reading", "music", "coding"],
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY"
    }
}
print("student: ",student)

#Accessing the student's name
print("student name: ", student["name"])

#Accessing the student's age
print("student age: ", student["age"])

#Accessing the student's hobbies
print("student hobbies: ", student["hobbies"])

#Accessing the student's address
print("student address: ", student["address"])

#Accessing the student's city
print("student city: ", student["address"]["city"])
keys=["name", "age", "isStudent", "hobbies"]
for key in keys:
    if key in student:
        print(key, student[key])
    else:
        print(f"{key} not found")

#Accessing the studnet's hobbies and iterate list with index
for index, hobby in enumerate(student["hobbies"]):
    print(index, hobby)
    

    
