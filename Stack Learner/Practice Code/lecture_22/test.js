// ei project er sathe ei file er kono connection nai. Eta diye just bhujbo kivabe database ke connect kora jay ekta project er sathe.

const mongoose = require('mongoose');


// "node test.js" diye eta run korle error dekhabe jodi database running na thake.
// database run korate "mongod" command use korte hobe.

mongoose.connect('mongodb://localhost:27017/test2',{
    serverSelectionTimeoutMS: 1000,
}).then(()=>{
    console.log("Database connected");
    createUser({name: 'Ayman', email: 'ayman@example.com'});
    createUser({name: 'Abir', email: 'abir@example.com'});
    
}).catch((e) => {
    console.log(e);
});


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

async function createUser(data){
    const user = new User(data);
    await user.save();
}