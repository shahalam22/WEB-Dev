const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: Date}],
    date: {type:Date, default: Date.now},
    // hidden: boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const blogModel = mongoose.model('blogModel', blogSchema);

mongoose.connect('mongodb://127.0.0.1:27017/test').then(async()=>{
    console.log("Database Connected.");

    const blog1 = new blogModel({title: 'blog1', author: 'shah alam', body: 'lorem ipsum dnfs sdf ek  knffkenfs ndfmnm sdfwew'})
    await blog1.save();

    console.log(blog1);

}).catch((e)=>{
    console.log(e);
})