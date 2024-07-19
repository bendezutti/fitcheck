//Author: Ben DeZutti
//Class: Web Programming

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const shoeSchema = new Schema( 
    {
    shoeImage: {type: String, required: true }
    }
)

module.exports = mongoose.model('shoes', shoeSchema)

