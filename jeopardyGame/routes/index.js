const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const GameModel = require("../models/Game");
const passport = require("passport");
const adminCheck = require("../adminCheck");
const googlepassport = require('../passport');


// GET home page
router.get("/", (req, res) => {
  // Render the home page
  res.render("index", {
    title: "JEOPARDY",
    showHeader: false,
    showFooter: false,
  });
});

// Add Google OAuth route
router.get('/auth/google',
  googlepassport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/auth/google/callback',
  googlepassport.authenticate('google', { failureRedirect: '/adminLogin' }),
  function(req, res) {
    // Successful authentication, redirect to admin panel or other page
    res.redirect('/adminPanel');
  });


// GET page for user registration
router.get("/playerInfoForm", (req, res) => {
  // Render the player info form page
  res.render("playerInfoForm", {
    title: "Player Info",
  });
});

// GET Game page
router.get("/game", async (req, res) => {
  // Retrieve gamesList and format questions
  const gamesList = await GameModel.find().limit(6);
  gamesList.forEach((game) => {
    game.questions.forEach((question, index) => {
      question.value = (index + 1) * 100;
    });
  });
  // Render the game page
  res.render("game", {
    title: "JEOPARDY",
    gamesList,
    showFooter: true,
  });
});

// GET Game Info Page
router.get("/gameInfo", adminCheck, async (req, res) => {
  // Render the game info page
  res.render("gameInfo", {
    title: "Create A Game",
    questionCount: [0, 1, 2, 3, 4], // display 5 question fields
    admin: req.Admin,
    Admin: Admin,
    showHeader: true,
    showFooter: false,
  });
});

// POST users to Game page
router.post("/game", async (req, res) => {
  // Process form data and render the game page

  let { user1, user2 } = req.body;
  const gamesList = await GameModel.find().limit(6);
  gamesList.forEach((game) => {
    game.questions.forEach((question, index) => {
      question.value = (index + 1) * 100; //  Add value to each question in game record
    });
  });
  res.render("game", {
    title: "JEOPARDY",
    gamesList,
    user1,
    user2,
    showFooter: true,

  });
});

// GET admin panel
router.get("/adminPanel", async (req, res) => {
  // Retrieve adminsList and determine if the user is logged in
  const adminsList = await Admin.find();
  const isLoggedIn = req.isAuthenticated();
  // Render the admin panel page
  res.render("adminPanel", {
    title: "WELCOME ALL ADMINS",
    adminsList,
    admin: req.Admin,
    isLoggedIn,
    showHeader: true,
    showFooter: true,
  });
});

router.post("/adminPanel", (req, res) => {
  // Render the admin panel page
  res.render("adminPanel", {
    title: "Welcome All Admins",
    Admin,
    showHeader: true,
    showFooter: true,
  });
});

// GET admin registration page
router.get("/adminRegister", (req, res) => {
  // Render the admin registration page
  res.render("adminRegister", {
    admin: req.Admin,
  });
});

// POST admin registration
router.post("/adminRegister", (req, res) => {
  // Register a new admin and redirect to the admin panel page upon successful registration
  Admin.register(
    new Admin({ username: req.body.email }),
    req.body.password,
    (err, newAdmin) => {
      if (err) {
        console.log(err);
        return res.render("adminRegister");
      } else {
        req.login(newAdmin, (err) => {
          res.redirect("/adminPanel");
        });
      }
    }
  );
});


// GET admin login page
router.get("/adminLogin", async (req, res) => {
  // Retrieve admin data and render the admin login page
  const admin = await Admin.findById(req.params._id, req.body);
  let messages = req.session.messages || [];
  res.render("adminLogin", {
    title: "Login",
    messages,
    admin,
  });
});

// POST admin login
router.post("/adminLogin", passport.authenticate("local", {
  successRedirect: "/adminPanel",
  failureRedirect: "/adminLogin",
  failureMessage: "Invalid Login",
}));

// GET route for rendering the edit form with pre-filled data
router.get("/gameEdit/:_id", adminCheck, async (req, res) => {
  // Fetch the game record to be edited based on its id
  const gameRecord = await GameModel.findById(req.params._id);

  // Render the edit form and pass the fetched game record data to the view
  res.render("gameEdit", {
    title: "Edit Game",
    gameRecord: gameRecord,
    user: req.user,
    showHeader: true,
  });
});

// Route for editing game data
router.post("/gameEdit/:_id", adminCheck, async (req, res) => {
  // Update the game record in the database with the submitted form data
  await GameModel.findByIdAndUpdate(req.params._id, req.body);

  // Redirect the user back to the game page or a confirmation page
  res.redirect("/game");
});


// Route for deleting a game record
router.get("/gameDelete/:id", adminCheck, async (req, res) => {
  // Delete the game record by ID and redirect to game overview page
  await GameModel.findByIdAndDelete(req.params.id);
  res.redirect("/gameOverview");
});

// POST gameInfo data
router.post("/gameInfo", adminCheck, async (req, res) => {
  // Save new game data and redirect to game overview page
  const { category, questions } = req.body;
  const newGame = new GameModel({ category, questions });
  await newGame.save();
  res.redirect("/gameOverview");
});


// GET game overview page
router.get("/gameOverview", adminCheck, async (req, res) => {
  const gamesList = await GameModel.find();
  res.render("gameOverview", {
    title: "Backend Game Data",
    gamesList,
    admin: req.Admin,
    Admin,
    showHeader: true,
    showFooter: true,
  });
});

// GET logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    res.redirect("/");
  });
});

module.exports = router;
