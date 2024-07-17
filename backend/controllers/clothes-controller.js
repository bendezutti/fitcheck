
const Clothes = require('../models/clothesModel');


const Shirt = require('../models/shirtsModel')


const Pants = require('../models/pantsModel')


const Shoes = require('../models/shoesModel')


const addShirt = async (req, res, next) => {
    const createdShirt = new Shirt({
        shirtImage: req.file.path
    });

    try {
        await createdShirt.save();
    } catch (err) {
        return res.status(500).json({ message: "Creating Shirt failed, clothes-controller issue." })
    };

    res.status(201).json({ shirt: createdShirt });
}

const addPants = async (req, res, next) => {

    const createdPants = new Pants({
        pantsImage: req.file.path
    });

    try {
        await createdPants.save();
    } catch (err) {
        return res.status(500).json({ message: "Creating Pants failed, clothes-controller issue." })
    };

    res.status(201).json({ pants: createdPants });
}

const addShoes = async (req, res, next) => {
    const createdShoes = new Shoes({
        shoeImage: req.file.path
    });

    try {
        await createdShoes.save();
    } catch (err) {
        return res.status(500).json({ message: "Creating Shoes failed, clothes-controller issue." })
    };

    res.status(201).json({ shoes: createdShoes });
}

const getShirts = async (req, res, next) => {
    let shirts;
    try {
        shirts = await Shirt.find();
    } catch (err) {
        return res.status(500).json({ message: 'Fetching shirts has failed, please try again later' });
    }
    res.json({ shirt: shirts.map(shirt => shirt.toObject({ getters: true })) });
};

const getPants = async (req, res, next) => {
    let pants;
    try {
        pants = await Pants.find();
    } catch (err) {
        return res.status(500).json({ message: 'Fetching pants has failed, please try again later' });
    }
    res.json({ pants: pants.map(pants => pants.toObject({ getters: true })) });
};

const getShoes = async (req, res, next) => {
    let shoes;
    try {
        shoes = await Shoes.find();
    } catch (err) {
        return res.status(500).json({ message: 'Fetching shoes has failed, please try again later' });
    }
    res.json({ shoes: shoes.map(shoes => shoes.toObject({ getters: true })) });
};


const createFit = async (req, res, next) => {
    const { shirts, pants, shoes } = req.body;
  
    const createdFit = new Clothes({
      shirtImage: shirts,
      pantsImage: pants,
      shoeImage: shoes
    });
  
    try {
      await createdFit.save();
      res.status(201).json({ clothes: createdFit });
    } catch (err) {
      return res.status(500).json({ message: "Creating Fit failed, clothes-controller issue." });
    }
  };
  
  const getFit = async (req, res, next) => {
    let fit;
    try {
        fit = await Clothes.find();
    } catch (err) {
        return res.status(500).json({ message: 'Fetching shoes has failed, please try again later' });
    }
    res.json({ fit: fit.map(fit => fit.toObject({ getters: true })) });
};


  

exports.addShirt = addShirt;
exports.addPants = addPants;
exports.addShoes = addShoes;
exports.createFit = createFit;
exports.getFit = getFit;
exports.getShirts = getShirts;
exports.getPants = getPants;
exports.getShoes = getShoes;
