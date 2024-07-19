//Author: Ben DeZutti
//Class: Web Programming

const express = require('express');
const router = express.Router();
const fileUpload = require('../middleware/fileUpload');
const clothesController = require('../controllers/clothes-controller')

router.get('/shirts', clothesController.getShirts)

router.get('/pants', clothesController.getPants)

router.get('/shoes', clothesController.getShoes)

router.post('/shirts', fileUpload.single('image'), clothesController.addShirt)

router.post('/pants', fileUpload.single('image'), clothesController.addPants) 

router.post('/shoes', fileUpload.single('image'), clothesController.addShoes)

module.exports = router