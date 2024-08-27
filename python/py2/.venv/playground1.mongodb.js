use("a1");

db.users.insertOne({
    _id: 1,
    name: "Max",
    age: 29,
    status: "active"
});
db.users.insertOne({
    _id: 2,
    name: "Manu",
    age: 30,
    status: "active"
});


db.users.find({});

db.users.updateOne(
    {
        _id: 1
    },
    {
        $set: {
            status: "inactive"
        }
    }
);

db.users.insertMany({
    _id: 3,
    name: "Julie",
    age: 25,
    status: "active"
},
    {
        _id: 4,
        name: "Julissss",
        age: 25,
        status: "active"
    },
    {
        _id: 5,
        name: "Julisssss",
        age: 25,
        status: "active"
    }
);

db.users.find({ _id: 2 });
