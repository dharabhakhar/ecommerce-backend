const mongoose = require('mongoose');

var register = new mongoose.Schema({
    email:{
        type:String,
        required:[true, "email require"],
        unique:true,
    },
    password:{
        type:String,
        required:[true, "password require"],
    },
});

var register_data = mongoose.model('register', register);

module.exports = register_data