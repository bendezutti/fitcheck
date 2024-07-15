const clothes = require('../models/clothesModel');

const Clothes = require('../models/clothesModel');

const shirt = require('../models/shirtsModel')

const Shirt = require('../models/shirtsModel')

const pants = require('../models/pantsModel')

const Pants = require('../models/pantsModel')

const shoes = require('../models/shoesModel')

const Shoes = require('../models/shoesModel')


const addShirt = async(req,res,next) => { 
    const {shirtImage} = req.body
    const createdShirt = new Shirt({ 
        shirtImage: req.file.path
});

    try{ 
        await createdShirt.save();
    } catch(err){ 
        return res.status(500).json({message: "Creating Shirt failed, clothes-controller issue." })
    };

    res.status(201).json({shirt: createdShirt});
}

const addPants = async(req,res,next) => { 

    const createdPants = new Pants({
        pantsImage: req.file.path
    });

    try{ 
        await createdPants.save();
    } catch(err){ 
        return res.status(500).json({message: "Creating Pants failed, clothes-controller issue." })
    };

    res.status(201).json({pants: createdPants});
}

const addShoes = async(req,res,next) => { 
    const createdShoes = new Shoes({ 
        shoeImage: req.file.path
});

    try{ 
        await createdShoes.save();
    } catch(err){ 
        return res.status(500).json({message: "Creating Shoes failed, clothes-controller issue." })
    };

    res.status(201).json({shoes: createdShoes});
}


const createFit = async(req, res, next) => { 

    const createdFit = new Clothes({ 
        shirtImage: req.body.image,
        pantsImage: req.body.image,
        shoeImage: req.body.image
});

    try{ 
        await createdFit.save();
    } catch(err){ 
        return res.status(500).json({message: "Creating Fit failed, clothes-controller issue." })
    };

    res.status(201).json({clothes: createdFit});
};


const getAllClothes = async (req, res, next) => { 
    const userID = req.params.uid; 

    let setClothes; 
    try{ 
        setClothes = await Clothes.find({creator: userID});
    } catch(err){ 
        return res.status(500).json({message: 'Fetching clothes failed. clothes-controller issue'})
    };

    if(!clothes){ 
        return res.status(404).json({message: "Could not find any clothes!"})
    };

    res.json({setClothes: setClothes.map(clothes => clothes.toObject({getters: true}))})
};

exports.addShirt = addShirt;
exports.addPants = addPants;
exports.addShoes = addShoes;
exports.createFit = createFit;
exports.getAllClothes = getAllClothes;
