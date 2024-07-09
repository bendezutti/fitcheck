const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clothesSchema = new Schema( 
    {
    shirtImage: {type: String, required: true },
    pantsImage: {type: String, required: true},
    shoesImage: {type: String, required: true}
    }
)


module.exports = mongoose.model('clothes', clothesSchema)

