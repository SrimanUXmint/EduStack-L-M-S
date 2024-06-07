import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`;

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
  width: 80%;
  padding: 8px;
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
  width: 80%;
  padding: 8px;
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
  padding: 8px 16px;
  cursor: pointer;
`;

const AddTeacherForm = ({ onAddTeacher, batches, courses }) => {
  const [teacherData, setTeacherData] = useState({
    teacherId: '',
    teacherName: '',
    password: '',
    teacherEmail: '',
    courseId: '',
    batchIds: [],
  });

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    if (name === "batchIds") {
      const selectedBatchIds = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setTeacherData(prevData => ({
        ...prevData,
        batchIds: selectedBatchIds,
      }));
    } else {
      setTeacherData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAddTeacher(teacherData); // Fixed typo here
      setTeacherData({ teacherId: '', teacherName: '', teacherEmail: '',password: '', courseId: '', batchIds: [] });
    } catch (error) {
      console.error('Error adding teacher', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="teacherId"
        placeholder="Teacher ID"
        value={teacherData.teacherId}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="teacherName"
        placeholder="Teacher Name"
        value={teacherData.teacherName}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="teacherEmail"
        placeholder="Teacher Email"
        value={teacherData.teacherEmail}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="password"
        placeholder="Password"
        value={teacherData.password}
        onChange={handleChange}
        required
      />
      <Select name="courseId" value={teacherData.courseId} onChange={handleChange} required>
        <option value="" disabled>Select Course</option>
        {courses.map(course => (
          <option key={course._id} value={course.courseId}>{course.courseName}</option>
        ))}
      </Select>
      <Select name="batchIds" value={teacherData.batchIds} onChange={handleChange} multiple required>
        {batches.map(batch => (
          <option key={batch._id} value={batch.batchIds}>{batch.batchName}</option>
        ))}
      </Select>
      <Button type="submit">Add Teacher</Button>
    </Form>
  );
};

export default AddTeacherForm;
