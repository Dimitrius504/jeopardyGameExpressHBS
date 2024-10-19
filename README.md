# Full Stack Jeopardy Game

## Overview
This full-stack Jeopardy game application allows users to sign up or sign in with Google to manage Jeopardy game questions. It is designed to provide a dynamic experience where admins can update questions for the game, ensuring content remains fresh and engaging.

## Technologies Used
- **Backend:** Node.js with Express
- **Database:** MongoDB with Mongoose
- **Authentication:** Passport.js with Google OAuth
- **Frontend:** Handlebars (hbs), Bootstrap
- **Deployment:** Render

## Features
- **Google Authentication:** Allows users to sign in using their Google accounts.
- **CRUD Operations:** Admins can create, read, update, and delete Jeopardy questions.
- **Interactive Gameplay:** Users can play Jeopardy with updated questions and interactive game logic.

## Project Structure
- `bin/`: Contains command line scripts.
- `models/`: MongoDB models (Admin.js for admin schema, Game.js for game logic).
- `public/`: Static files like images, stylesheets, and JavaScript.
- `routes/`: Express routes for handling CRUD operations and authentication.
- `views/`: Handlebars templates for the user interface.
- `adminCheck.js`: Middleware for admin authentication checks.
- `app.js`: Main application setup and middleware configuration.
- `passport.js`: Passport configuration for Google OAuth.

## Setup Instructions
1. Clone the repository: `git clone https://github.com/yourusername/jeopardyGame.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Access the application locally at `http://localhost:3000` or visit the live version.

## Demo
Experience the live Jeopardy game [here](https://jeopardygameexpresshbs-2.onrender.com/). Sign in with your Google account to manage questions or play the game.
