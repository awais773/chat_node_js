const jwt = require('jsonwebtoken');

const secret = 'mysecretkey';

function generateToken(userId) {
    const payload = { userId };
    const options = { expiresIn: '30d' };
    const token = jwt.sign(payload, secret, options);
    return token;
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secret);
        // The token is valid, and the payload is stored in the 'decoded' variable
        return decoded;
    } catch (error) {
        // If the token is invalid or has expired, an error will be thrown
        console.error('Error verifying token:', error.message);
        return null;
    }
}
module.exports = { generateToken, verifyToken };