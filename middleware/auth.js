const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (roles = []) => {
    return async (req, res, next) => {
        try {
            const token = req.header('Authorization')?.replace('Bearer ', '');
            if (!token) return res.status(401).json({ message: 'No token provided' });

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);

            if (!user) return res.status(401).json({ message: 'Invalid token' });

            if (roles.length && !roles.includes(user.role)) {
                return res.status(403).json({ message: 'Access denied' });
            }

            req.user = user;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Unauthorized', error: err.message });
        }
    };
};

module.exports = auth;
