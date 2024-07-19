//Author: Ben DeZutti
//Class: Web Programming

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const pantSchema = new Schema( 
    {
    pantsImage: {type: String, required: true }
    }
)

module.exports = mongoose.model('pants', pantSchema)

