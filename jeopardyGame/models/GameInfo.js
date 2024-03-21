// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;




// const GameInputSchema = new Schema({

//     id: Number,  
//     category: [{
//         required: true,
//         type: String,
//         question1: [{
//             correctAnswer: String,
//             incorrectAnswer: String,
//             value: Number
//         }],
//         question2: [{
//             correctAnswer: String,
//             incorrectAnswer: String,
//             value: Number
//         }],
//         question3: [{
//             correctAnswer: String,
//             incorrectAnswer: String,
//             value: Number
//         }],
//         question4: [{
//             correctAnswer: String,
//             incorrectAnswer: String,
//             value: Number
//         }],
//         question5: [{
//             correctAnswer: String,
//             incorrectAnswer: String,
//             value: Number
//         }],
    
//     }],

// });

// const GameInput = mongoose.model("GameInput", GameInputSchema);


// console.log(GameInputSchema);

// module.exports = GameInput;





// const gameData = {
//     "category": category,
//     "question1": {
//         "correctAnswer": q1c,
//         "incorrectAnswers": q1f,
//         "value": 100
//     },
//     "question2": {
//         "correctAnswer": q2c,
//         "incorrectAnswers": q2f,
//         "value": 200
//     },
//     "question3": {
//         "correctAnswer": q3c,
//         "incorrectAnswers": q3f,
//         "value": 300
//     },
//     "question4": {
//         "correctAnswer": q4c,
//         "incorrectAnswers": q4f,
//         "value": 400
//     },
//     "question5": {
//         "correctAnswer": q5c,
//         "incorrectAnswers": q5f,
//         "value": 500
//     }
// };



// // Define answer schema
// const AnswerSchema = new Schema({
//   text: {
//     type: String,
//     required: true,
//   },
// });

// // Define question schema
// const QuestionSchema = new Schema({
//   question: {
//     type: String,
//     required: true,
//   },
//   value: {
//     type: Number,
//     required: true,
//     enum: [100, 200, 300, 400, 500],
//   },
//   correctAnswer: {
//     type: AnswerSchema,
//     required: true,
//   },
//   falseAnswers: {
//     type: [AnswerSchema],
//     required: true,
//     validate: {
//       validator: function (arr) {
//         return arr.length === 2; // Ensure exactly 2 false answers
//       },
//       message: "Exactly two false answers are required",
//     },
//   },
// });

// // Define game info schema
// const GameInfoSchema = new Schema({
//   categories: {
//     type: [
//       {
//         categoryName: {
//           type: String,
//           required: true,
//         },
//         questions: {
//           type: [QuestionSchema],
//           required: true,
//           validate: {
//             validator: function (arr) {
//               return arr.length === 5; // Ensure exactly 5 questions per category
//             },
//             message: "Exactly five questions are required per category",
//           },
//         },
//       },
//     ],
//     required: true,
//     validate: {
//       validator: function (arr) {
//         return arr.length === 6; // Ensure exactly 6 categories
//       },
//       message: "Exactly six categories are required",
//     },
//   },
// });

// const GameInfo = mongoose.model("GameInfo", GameInfoSchema);


// console.log(GameInfoSchema);

// module.exports = GameInfo;

// const categoriesArray = [
//   (categories = [
//     (category1 = [
//       (question1 = [
//         (value = 100),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question2 = [
//         (value = 200),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question3 = [
//         (value = 300),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question4 = [
//         (value = 400),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question5 = [
//         (value = 500),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//     ]),
//     (category2 = [
//       (question1 = [
//         (value = 100),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question2 = [
//         (value = 200),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question3 = [
//         (value = 300),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question4 = [
//         (value = 400),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question5 = [
//         (value = 500),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//     ]),
//     (category3 = [
//       (question1 = [
//         (value = 100),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question2 = [
//         (value = 200),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question3 = [
//         (value = 300),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question4 = [
//         (value = 400),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question5 = [
//         (value = 500),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//     ]),
//     (category4 = [
//       (question1 = [
//         (value = 100),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question2 = [
//         (value = 200),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question3 = [
//         (value = 300),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question4 = [
//         (value = 400),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question5 = [
//         (value = 500),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//     ]),
//     (category5 = [
//       (question1 = [
//         (value = 100),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question2 = [
//         (value = 200),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question3 = [
//         (value = 300),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question4 = [
//         (value = 400),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question5 = [
//         (value = 500),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//     ]),
//     (category6 = [
//       (question1 = [
//         (value = 100),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question2 = [
//         (value = 200),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question3 = [
//         (value = 300),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question4 = [
//         (value = 400),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//       (question5 = [
//         (value = 500),
//         (correctAnswer = "correct"),
//         (incorrect1 = "inc1"),
//         (incorrect2 = "inc2"),
//       ]),
//     ]),
//   ]),
// ];

// console.log(categoriesArray);
