// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import route files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Import and configure MongoDB and dotenv for environment variables
let mongoose = require('mongoose');
let dotenv = require('dotenv');
let passport = require('passport');
let session = require('express-session');

// Load environment variables from .env file if not in production
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING)
  .then((res) => { console.log('Connected to MongoDB') })
  .catch(() => { console.log('MongoDB connection failed') });

// Create express app
let app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware setup
app.use(logger('dev')); // Logger
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Configure session
app.use(session({
  secret: process.env.PASSPORT_SECRET,
  resave: true,
  saveUninitialized: false
}));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport with Admin model
const Admin = require('./models/Admin');
passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// Middleware to set authentication status
app.use(function(req, res, next) {
  res.locals.isLoggedIn = req.isAuthenticated();
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
