const jwt = require('jsonwebtoken');

const secret = 'mysecretkey';

// Store revoked tokens
const revokedTokens = new Set();

function generateToken(userId) {
    const payload = { userId };
    const options = { expiresIn: '30d' };
    const token = jwt.sign(payload, secret, options);
    return token;
}

function verifyToken(token) {
    try {
        // Check if the token is revoked
        if (revokedTokens.has(token)) {
            throw new Error('Token has been revoked');
        }

        const decoded = jwt.verify(token, secret);
        // The token is valid, and the payload is stored in the 'decoded' variable
        return decoded;
    } catch (error) {
        // If the token is invalid or has expired, an error will be thrown
        console.error('Error verifying token:', error.message);
        return null;
    }
}

function revokeToken(token) {
    // Add the token to the list of revoked tokens
    revokedTokens.add(token);
}

module.exports = { generateToken, verifyToken, revokeToken };
