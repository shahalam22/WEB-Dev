// - name - email - password - roles - account status

// to make a model using mongoose at first we have to make a schema/footprint

const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    roles: [String],
    accountStatus: String,
});

const User = model('User', userSchema);
module.exports = User;