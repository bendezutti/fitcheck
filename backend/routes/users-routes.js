const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const usersController = require('../controllers/users-controller')

//GET route that will retrieve users 

//POST route that will allow a user to sign up
router.post(
    '/signup',
    usersController.signup
  );
  
//Post route that will allow a user to sign in
router.post('/login', usersController.login)
module.exports = router;