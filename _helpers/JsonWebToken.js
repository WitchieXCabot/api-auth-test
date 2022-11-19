var { expressjwt: jwt } = require("express-jwt");
const config = require('config.json');

module.exports = jwtToken;

function jwtToken() {
    const { secret } = config;
    return jwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // routes that don't require authentication
            '/users/authenticate'
        ]
    });
}