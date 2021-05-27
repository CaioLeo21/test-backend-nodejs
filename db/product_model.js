const mongoose = require('mongoose')

module.exports = app => {

    const product_schema = new mongoose.Schema({
        title: {
            type: String,
            require: true
        },

        description: {
            type: String,
            require: true
        },

        price: {
            type: Number,
            require: true
        },

        category: {
            type: String,
            require: true
        }

    })

    const product_model = mongoose.model('product', product_schema)

    return { product_model }
}