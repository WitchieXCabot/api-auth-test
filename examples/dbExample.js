// THIS MIGHT NOT WORK, THIS HASNT BEEN TESTED!

const config = require('../config.json');
const jwt = require('jsonwebtoken');
const users = require('./userSchema');

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = await users.findOne(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

    // create a token that is valid for one week
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}