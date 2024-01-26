const jwt = require('jsonwebtoken');
const config = require('../config');
const dotenv = require('dotenv');
dotenv.config();


// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, config.jwt_secret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error(error);
        return res.status(403).json({ message: 'Invalid token' });
    }
};
