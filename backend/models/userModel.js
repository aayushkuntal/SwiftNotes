const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "https://cdn.dribbble.com/users/1008875/screenshots/8936924/media/cbfa5e7d626c8f984424080c382b4275.png"
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

//Export the schema
const User = mongoose.model('User', userSchema);

module.exports = User;


