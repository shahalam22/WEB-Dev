// not using default id

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id: Number
});

const Model = mongoose.model('Test', schema);

mongoose.connect('mongodb://127.0.0.1:27017/test').then(async()=>{
    console.log("Database Connected.");

    // this will generate new error. Here we must include "_id"
    const doc = new Model();
    await doc.save();

    // this works
    doc._id = 1;
    await doc.save();

}).catch((e)=>{
    console.log(e);
})