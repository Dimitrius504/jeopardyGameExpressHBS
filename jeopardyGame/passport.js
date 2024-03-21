const passport = require('passport'); // Importing passport library
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Importing Google OAuth 2.0 authentication strategy
const Admin = require('./models/Admin'); // Importing Admin model
require('dotenv').config();

// Configuring Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, // Google OAuth client ID
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Google OAuth client secret
    callbackURL: 'http://localhost:3000/auth/google/callback' // Callback URL for Google OAuth
  },
  async (accessToken, refreshToken, profile, done) => { // Callback function for handling Google OAuth response
    try {
      let admin = await Admin.findOne({ googleId: profile.id }); // Finding admin based on Google ID
      if (admin) { // If admin exists
        return done(null, admin); // Return admin user
      } else { // If admin doesn't exist
        admin = new Admin({ // Create a new admin user
          googleId: profile.id, // Assign Google ID
          username: profile.emails[0].value, // Assign username as the first email from Google profile
          // Add additional fields if needed
        });
        await admin.save(); // save admin user to the database
        return done(null, admin); // eeturn admin 
      }
    } catch (error) { // Catch any errors that occur during admin retrieval or creation
      return done(error, null); // return error
    }
  }
));

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user by their ID
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const admin = await Admin.findById(id); // Find admin user by Id
    done(null, admin); // Return admin user
  } catch (error) { // Catch any errors that occur during admin retrieval
    done(error, null); // Return error
  }
});

module.exports = passport; // Export passport configuration
