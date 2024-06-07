const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    courseId: String,
    batchId: String,
    quizName: String,
    quizTime: String,
    grade: String,
    createdAt: { type: Date, default: Date.now }
});

const QuizData = mongoose.model('quizdata', quizSchema);
module.exports = QuizData;