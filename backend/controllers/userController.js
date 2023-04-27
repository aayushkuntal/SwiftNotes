const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const registerUser =asyncHandler (async (req, res) => {
    const { name, email, password, pic } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    //Create new user
    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    //User created and send response
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:null
        })
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }
});

module.exports = { registerUser }