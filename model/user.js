const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var user = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:'user'
    },
    cart:{
        type:Array,
        default:[]
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    wishlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }
},{timestamps:true});

//Export the model
module.exports.user_data = mongoose.model('User_data', user);