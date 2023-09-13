const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

const kitten = mongoose.model('kitten', kittySchema);

mongoose.connect('mongodb://127.0.0.1:27017/test').then(async()=>{
    console.log("Database Connected");

    const fluffy = new kitten({name: "fluffy"});
    await fluffy.save();
    fluffy.speak();


    const silence = new kitten({name: 'Silence'});
    console.log(silence.name);

}).catch((e) =>{
    console.log(e);
}).finally(()=>{
    mongoose.connection.close();
})



// import mongoose  from "mongoose";
// const {Schema} = mongoose;

// const blogSchema = new Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{body: String, date: Date}],
//     date: {type: Date, default: Date.now},
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number
//     }
// });

// const Blog = mongoose.model('Blog', blogSchema);