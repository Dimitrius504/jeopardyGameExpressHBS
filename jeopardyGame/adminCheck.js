// Importing required modules
let passport = require('passport');
let Admin = require('./models/Admin');

// Middleware to check if the user is authenticated
let isAuthenticated = (req, res, next) => {
    // If user is not authenticated, redirect to adminLogin page
    if (!req.isAuthenticated()) {
        res.redirect('adminLogin');
        return false;
    }

    return next(); // Proceed to the next middleware or route handler
}

module.exports = isAuthenticated; // Exporting the isAuthenticated middleware
