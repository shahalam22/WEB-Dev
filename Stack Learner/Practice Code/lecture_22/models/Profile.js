const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        phone: String,
        avatar: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    }
);

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;