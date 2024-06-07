import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: black;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: #404a6d8a;
  border-radius: 4px;
  border-width: 0px;
  border-color: black;
  margin-bottom: 5px;
  &::placeholder {
    color: #cec2c294;
  }
`;

const Select = styled.select`
  color: black;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: #404a6d8a;
  border-radius: 4px;
  border-width: 0px;
  border-color: black;
  margin-bottom: 5px;
`;

const Button = styled.button`
  color: white;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background-color: rgb(0, 123, 255);
  border-radius: 4px;
  border-width: 0px;
  border-color: black;
  margin-top: 10px;
`;

const TimetableForm = ({ onSave, courses, teachers }) => {
  const [courseId, setCourseId] = useState('');
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [room, setRoom] = useState('');
  const [teacherId, setTeacherId] = useState('');
  
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  useEffect(() => {
    if (courseId) {
      // Filter teachers based on the selected courseId
      const filtered = teachers.filter(teacher => teacher.courseId === courseId);
      setFilteredTeachers(filtered);
    } else {
      setFilteredTeachers([]);
    }
  }, [courseId, teachers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCourse = courses.find(course => course.courseId === courseId);
    const selectedTeacher = teachers.find(teacher => teacher.teacherId === teacherId);
    onSave({
      courseName: selectedCourse ? selectedCourse.courseName : '',
      day,
      startTime,
      room,
      teacherName: selectedTeacher ? selectedTeacher.teacherName : '',
      teacherId: selectedTeacher ? selectedTeacher.teacherId : ''
    });
    setCourseId('');
    setDay('');
    setStartTime('');
    setRoom('');
    setTeacherId('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <label>Course:</label>
        <Select value={courseId} onChange={(e) => setCourseId(e.target.value)} required>
          <option value="">Select a course</option>
          {courses.map(course => (
            <option key={course.courseId} value={course.courseId}>
              {course.courseName}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label>Day:</label>
        <Select value={day} onChange={(e) => setDay(e.target.value)} required>
          <option value="">Select Day</option>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </Select>
      </div>
      <div>
        <label>Start Time:</label>
        <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      </div>
      <div>
        <label>Room:</label>
        <Input type="text" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Room" required />
      </div>
      <div>
        <label>Teacher:</label>
        <Select value={teacherId} onChange={(e) => setTeacherId(e.target.value)} required>
          <option value="">Select a teacher</option>
          {filteredTeachers.map(teacher => (
            <option key={teacher.teacherId} value={teacher.teacherId}>
              {teacher.teacherName}
            </option>
          ))}
        </Select>
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default TimetableForm;
