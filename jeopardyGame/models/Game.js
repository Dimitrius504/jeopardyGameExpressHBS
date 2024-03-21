const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    text: {
        type: String,
        required: [true, "Question text is required"]
    },
    correct: {
        type: String,
        required: [true, "Correct answer is required"]
    },
    incorrect: {
        type: String,
        required: [true, "Incorrect answer is required"]
    }
});

const GameSchema = new Schema({
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    questions: [QuestionSchema]
});

const GameModel = mongoose.model("gameInput", GameSchema);

GameSchema.index({ text: 'text', correct: 'correct', incorrect: 'incorrect' });

module.exports = GameModel;
