const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var product_data = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    category1:{
        type:String,
        required:true,
    },
    brand: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    sold: {
        type: Number,
        default: 0,
    },
    thumb:{
        type:String,
    },
    images: {
        type: Array,
    },
    color: {
        type: String,
        required: true,
    },
    rating: [
        {
            star: Number,
            postedby: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            }
        }
    ],
    rate:{
        type: Number,
        require: true,
    }
}, { timestamps: true });

//Export the model
module.exports.product = mongoose.model('product', product_data);