const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
         Plant_name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        Origin: {
            type: String,
            required: [true, "Please enter a addresss"]
        },
        quantity: {
            type: Number,
            required: true,
        },
        no_order: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
