const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: function(v){
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: (prop) => `Invalid email: ${prop.value}`,
            },
        },
        password: {
            type: String,
            minlength: [6, 'Password is too short'],
            maxlength: [30, 'Password is too long'],
            required: true,
        },
        roles: {
            type: [String],
            required: true,
            default: ['STUDENT'],
        },
        accountStatus: {
            type: String,
            enum: ['ACTIVE', 'PENDING', 'REJECTED'],
            default: 'PENDING',
            required: true,
        },
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;