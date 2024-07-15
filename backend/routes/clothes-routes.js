const express = require('express');

const router = express.Router();
const fileUpload = require('../middleware/fileUpload');

const clothesController = require('../controllers/clothes-controller')

router.post('/shirts', fileUpload.single('image'), clothesController.addShirt)

router.post('/pants', fileUpload.single('image'), clothesController.addPants) 

router.post('/shoes', fileUpload.single('image'), clothesController.addShoes)

//GET route that will retrieve everyone's outfits
router.get('/allfits', clothesController.getAllClothes)

//POST route that will post to a user's My Fits page
router.post('/makefit', clothesController.createFit)

module.exports = router