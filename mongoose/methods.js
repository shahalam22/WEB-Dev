const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    name: String, 
    type: String
},{
    methods: {
        findSimilarTypes(cb){
            return mongoose.model('Animal').find({type: this.type}, cb);
        }
    }
});

// // there is another alternate way to declare methods is that
// animalSchema.methods.findSimilarTypes = function(cb){
//     return mongoose.model('Animal').find({type: this.type}, cb);
// };

const Animal = mongoose.model('Animal', animalSchema);


mongoose.connect('mongodb://127.0.0.1:27017/test').then(async()=>{
    console.log("Database Connected.");

    const dog = new Animal({type: 'dog'});
    await dog.save();

    console.log(dog);

}).catch((e)=>{
    console.log(e);
})