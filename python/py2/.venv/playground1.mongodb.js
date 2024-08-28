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
// db.users.f

db.products.insertMany({
    _id: 1,
    name: "A Book",
    price: 12.99
},
    {
        _id: 2,
        name: "A T-Shirt",
        price: 29.99
    },
    {
        _id: 3,
        name: "A Car",
        price: 12999
    },
    {
        _id: 4,
        name: "A Bike",
        price: 999
    },
    {
        _id: 5,
        name: "A House",
        price: 129999
    },
    {
        _id: 6,
        name: "A Pen",
        price: 0.99
    },
    {
        _id: 7,
        name: "A Pencil",
        price: 0.29
    },
    {
        _id: 8,
        name: "A Rubber",
        price: 0.09
    },
    {
        _id: 9,
        name: "A Eraser",
        price: 0.19
    },
    {
        _id: 10,
        name: "A Mouse",
        price: 19.99
    }
);

db.products.aggregate({
    $group: {
        _id: null,
        total:{
            $sum: "$price"
        }
    }
});

