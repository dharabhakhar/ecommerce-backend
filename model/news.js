const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var news_data = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    name:{
        type:String,
    },
    NewsId:{
     type:String
    },
    image:{
        type:String
    }
}, { timestamps: true });

//Export the model
module.exports.news = mongoose.model('NewsData', news_data);