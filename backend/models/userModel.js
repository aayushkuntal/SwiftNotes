const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

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

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password, salt);

})


//Export the schema
const User = mongoose.model('User', userSchema);

module.exports = User;


