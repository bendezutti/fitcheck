//Author: Ben DeZutti
//Class: Web Programming

const bcrypt = require('bcryptjs')

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

  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return res.status(500).json({ message: 'Signup failed, please try again later' });
  }

  if (existingUser) {
    return res.status(422).json({ message: 'User already exists' });
  }

  let hashedPassword;
 
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).json({message: 'Could not create user, please try again'})
  }

  const createdUser = new User({
    email,
    password: hashedPassword,
  });

  
  let token; 
  try {
    token = jwt.sign(
      {
      userId: createdUser.id,
      email: createdUser.email
      },
      'secret_key',
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
    return res.status(500).json({ message: 'Login failed.' });
  }


  if(!existingUser){ 
    return res.status(422).json({message: 'Invalid credentials!'})
  }


  let isValidPassword = false

  try{ 
    isValidPassword = await bcrypt.compare(password, existingUser.password)
  } catch(err){ 
    return res.status(500).json({message: 'Login failed! Check the credentials.'})
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
      'secret_key', 
      {
        expiresIn: '1h'
      }
    )
  } catch (error) {
    res.status(500).json({message: 'Could not login, please try again.'})
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
