const { validationResult } = require('express-validator');

//use a library that will help with hashing passwords
const bcrypt = require('bcryptjs')

//import jsonwebtoken (JWT) to generate tokens
const jwt = require('jsonwebtoken')

const User = require('../models/usersModel');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    return res.status(500).json({ message: 'Fetching places has failed, please try again later' });
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
};


const signup = async (req, res, next) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(422).json( { message: 'Invalid inputs please try again'  });
  //   }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return res.status(500).json({ message: 'Signup failed, please try again later' });
  }

  if (existingUser) {
    return res.status(422).json({ message: 'User already exists' });
  }

  //generate a hashed password
  let hashedPassword;
  //HASH Method 
  //1) String to hash
  //2) SALT or number of salting rounds (influences hash strength)
  //Note : Value of 12, ideally hash cannot be revered engineered 
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).json({message: 'Could not create user, please try again'})
  }

  //STEP 1: lets add the image that is uploaded when creating (registering) a new User
  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  
  let token; 
  try {
    token = jwt.sign(
      {
      userId: createdUser.id, //user at which the token belongs to
      email: createdUser.email
      },
      'secret_key_do_not_share',
    { 
      expiresIn: '1h'
    }
  );
   } catch(err) {
    return res.status(500).json({message: "Could not create user, please try again"})
   }
 
  try {
    await createdUser.save();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.status(201).json(
    { 
    user: createdUser.id, 
    email: createdUser.email, 
    token: token
   }
)
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return res.status(500).json({ message: 'Login failed' });
  }


  if(!existingUser){ 
    return res.status(422).json({message: 'Invalid credentials!'})
  }


  let isValidPassword = false

  try{ 
    isValidPassword = await bcrypt.compare(password, existingUser.password)
  } catch(err){ 
    return res.status(500).json({message: 'Login failed! Check the credentials'})
  }

  if (!isValidPassword){ 
    return res.status(422).json({message: 'Invalid credentials!'})
  }

 
  let token; 
  try {
    token = jwt.sign( 
      { 
        userId: existingUser.id,
        email: existingUser.email,
      }, 
      'secret_key_do_not_share', 
      {
        expiresIn: '1h'
      }
    )
  } catch (error) {
    res.status(500).json({message: 'Could not login, please try again'})
  }
  
  res.json(
    { 
      userId: existingUser.id, 
      email: existingUser.email, 
      token: token
    }
  );
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
