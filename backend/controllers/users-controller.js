const User = require('../models/usersModel');

const signup = async (req, res, next) => {
    const { name, email, password, } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        res.status(500).json({ message: "Could not create user, users-controller error." })
    };

    if (existingUser) {
        return res.status(422).json({ message: 'User exists already.' })
    };

    const createdUser = new User({
        name,
        email,
        password
    });

    try {
        await createdUser.save();
    } catch (err) {
        return res.status(500).json({ message: 'Creating user failed.' })
    };

    res.status(201).json({ user: createdUser.toObject({ getters: true }) }); // createdUser includes the PW

};


const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        return res.status(500).json({ message: "User does not exist." })
    }

    if (!existingUser || existingUser.password !== password) {
        return res.status(422).json({ message: "Invalid email or password. Try again." })
    }
    res.json({ message: 'Logged in!' })
}

exports.login = login;
exports.signup = signup;