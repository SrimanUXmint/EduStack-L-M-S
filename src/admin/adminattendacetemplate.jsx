const StudentAttendance = ({ courseId, batchId, students, total, handlePresentChange }) => {
  return (
    <div className="student-attendance">
      <div className="attendance-header">
        <div>Student Name</div>
        <div>Total</div>
        <div>Present</div>
        <div>Attendance %</div>
      </div>
      {students.map((student, index) => {
        const attendancePercentage = parseInt((student.present / total) * 100);
        return (
          <div key={index} className="attendance-row">
            <div>{student.studentName}</div>
            <div>{total}</div>
            <div>
              <input
                style={{ fontWeight: "bolder", backgroundColor: "#404a6d8a", color: 'black' }}
                type="number"
                value={student.present}
                onChange={(e) => handlePresentChange(student.studentId, e)}
              />
            </div>
            <div>{attendancePercentage}%</div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentAttendance;
