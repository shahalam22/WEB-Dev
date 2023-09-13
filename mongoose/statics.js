const mongoose = require('mongoose');

//static functions - allows us to define static class methods for the models using schema objects
const animalSchema = mongoose.Schema({
    name: String,
    type: String
},{
    statics: {
        findByName(name){
            return this.find({name: new RegExp(name, 'i')});
        }
    }
});

// // alternate-1
// animalSchema.statics.findByName = function(name){
//     return this.find({name: new RegExp(name, 'i')});
// }

// // alternate-2
// animalSchema.statics('findByBreed', function(breed){return this.find({breed});});

const Animal = mongoose.model('Animal', animalSchema);

mongoose.connect('mongodb://127.0.0.1:27017/test').then(async()=>{
    console.log("Database Connected.");

    // codes

}).catch((e)=>{
    console.log(e);
})