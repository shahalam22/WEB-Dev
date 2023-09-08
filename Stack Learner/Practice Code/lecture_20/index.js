const mongoose = require('mongoose')

// //creating a schema - general
// const personSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: String,
//     age: Number,
//     bio: String,
//     single: Boolean,
// })

// creating schema - with specific validation
const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'minimum 3 chars'],
        maxlength: [10, 'maximum 10 chars']
    },
    lastName: String,
    email: String,
    age: Number,
    bio: String,
    single: Boolean,
})

//creating a model based on personSchema. Model er first parameter hishebe exactly model er jei nam oita use korte hobe, second parameter hishebe jei schema use korbo oi schema r nam use korte hobe
const Person = mongoose.model('Person', personSchema);

mongoose.connect('mongodb://127.0.0.1:27017/test').then(async () => {
    console.log('Database Connected');
    // amra chailei jekhane sekhane model use korte pari na. Model use korte hobe "Database Connected" thaka obosthay. Else amader data store hobe na database e.

    // // creating new person[general] and adding into database
    // const person = new Person({
    //     firstName: 'Alvi',
    //     lastName: 'Hossain',
    //     email: 'alvi@example.com',
    //     age: 25,
    //     bio: 'I am a backend developer',
    //     single: true
    // });
    // await person.save();
    // console.log("Person Created");
    // console.log(person);

    //creating new person[with validation] and adding into database
    const person = new Person({});
    await person.save();

    // // this is to read from database - general
    // const people = await Person.find();
    // console.log(people);

    // // this is to read from database - specific
    // const people = await Person.find({age: 25});
    // console.log(people);
    

}).catch((e) => {
    console.log(e);
}).finally(() => {
    mongoose.connection.close();
});
