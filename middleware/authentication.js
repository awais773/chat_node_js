const { verifyToken } = require("../utils/helper");

function authentications(req, res, next) {
    // Extract the token from the request header, query parameters, or cookies
    const token = req.header('Authorization')
    if (!token) {
        // If no token is found, return an error response
        return res.status(401).json({ error: 'Invlaid token Please log in or sign up.' });
    }

    try {
        // Verify the token using jwt.verify method
        const decoded = verifyToken(token);
        // The token is valid, and the payload is stored in the 'decoded' variable
        req.userId = decoded.userId; // Store the userId in the request object for use in subsequent middleware or route handlers
        next(); // Call next to pass the request to the next middleware or route handler
    } catch (error) {
        // If the token is invalid or has expired, an error will be caught here
        return res.status(401).json({ error: 'Invalid or expired token. Please log in again.' });
    }
}

module.exports = { authentications };
