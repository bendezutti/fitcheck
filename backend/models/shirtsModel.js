const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const shirtSchema = new Schema( 
    {
    shirtImage: {type: String, required: true }
    }
)

module.exports = mongoose.model('shirts', shirtSchema)

