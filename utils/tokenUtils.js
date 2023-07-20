const jwt = require('jsonwebtoken');

const secret = 'mysecretkey';

function generateToken(userId) {
const payload = { userId };
const options = { expiresIn: '1d' };
const token = jwt.sign(payload, secret, options);
return token;
}

module.exports = { generateToken };