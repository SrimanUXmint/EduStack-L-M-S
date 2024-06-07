const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    courseId: String,
    batchId: String,
    studentId: String,
    grade: String
});

const GradeData = mongoose.model('gradedata', gradeSchema);
module.exports = GradeData;