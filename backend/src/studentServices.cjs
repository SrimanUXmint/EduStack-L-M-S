const StudentData = require('./studentModel.cjs');

module.exports.createStudentService = (studentDetails) => {
    return new Promise((resolve, reject) => {
        var studentModelData = new StudentData(studentDetails);

        studentModelData.save()
            .then(result => {
                console.log(result);
                resolve(true); // Resolve the promise with true indicating success
            })
            .catch(err => {
                console.error(err);
                resolve(false); // Resolve the promise with false indicating failure
            });
    });
};