const profile = {
    name: 'John Doe',
    age: 30,
    email: "",
    occupation: 'Software Engineer',
    hobbies: ['reading', 'hiking', 'coding'],
    // address: {
    //     street: '123 Main St',
    //     city: 'Anytown',
    //     state: 'CA'={
    //         code:"xyz"
    //     },
    //     zip: '12345'
    // }
    address: {
        country: {
            code: "abc",
            name: "usa",
            capital: "washington",
            population: 30000000
        }
    }
};

// const name = profile.name;
// const age = profile.age;
// const occupation = profile.occupation;
// const email = profile.email;
// const hobbies = profile.hobbies;
// const address = profile.address;

// const { name, age, email, occupation, hobbies, address }  = profile;

// console.log(profile.name);
// console.log(profile.age);
// console.log(profile.email || "email not found");
// console.log(profile.occupation);
// console.log(profile.hobbies);
// console.log(profile.hobbies[0]);
// console.log(profile.address);
// console.log(profile.address.city);

const { address: { country: { code: countryCode } } } = profile;
console.log(countryCode);





