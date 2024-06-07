import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const AddStudentForm = ({ onAddStudent, batches, courses }) => {
  const [studentData, setStudentData] = useState({
    studentId: '',
    studentName: '',
    batch: '',
    courseId: '',
    password: '',
    studentEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAddStudent(studentData); // Fixed typo here
      setStudentData({ studentId: '', studentName: '', batch: '', courseId: '', password: '', studentEmail: '' });
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };
 

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="studentId"
        placeholder="Student ID"
        value={studentData.studentId}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="studentName"
        placeholder="Student Name"
        value={studentData.studentName}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="studentEmail"
        placeholder="Student Email"
        value={studentData.studentEmail}
        onChange={handleChange}
        required
      />
      <Select name="batch" value={studentData.batch} onChange={handleChange} required>
        <option value="" disabled>Select Batch</option>
        {batches.map(batch => (
          <option key={batch._id} value={batch.batchId}>{batch.batchName}</option>
          
        ))}
        
      </Select>
      <Input
        type="text"
        name="password"
        placeholder="Password"
        value={studentData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit">Add Student</Button>
    </Form>
  );
};

export default AddStudentForm;
