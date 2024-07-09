const clothes = require('../models/clothesModel')

const Clothes = require('../models/clothesModel')

const createFit = async(req, res, next) => { 
    const {shirtImage, pantsImage, shoesImage} = req.body

    const createdFit = new Clothes(
        shirtImage,
        pantsImage,
        shoesImage
    )

    try{ 
        await createdFit.save();
    } catch(err){ 
        return res.status(500).json({message: "Creating Fit failed, clothes-controller issue." })
    }

    res.status(201).json({clothes: createdFit})
}



const getClothesByUserID = async (req, res, next) => { 
    const userID = req.params.uid; 

    let setClothes; 
    try{ 
        setClothes = await Clothes.find({creator: userID})
    } catch(err){ 
        return res.status(500).json({message: 'Fetching clothes failed. Line 13 clothes-controller'})
    }

    if(!clothes){ 

    }

    res.json({setClothes: setClothes.map(clothes => clothes.toObject({getters: true}))})
}


exports.getClothesByUserID = getClothesByUserID;
exports.createFit = createFit;