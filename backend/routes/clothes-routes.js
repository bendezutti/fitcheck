const express = require('express');

const router = express.Router();

const clothesController = require('../controllers/clothes-controller')

//GET route that will retrieve everyone's outfits
router.get('/allfits', clothesController.getAllClothes)

//POST route that will post to a user's My Fits page
router.post('/makefit', clothesController.createFit)

module.exports = router