import React, { useState } from 'react';
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

const AddBatchForm = ({ onAddbatch, courses }) => {
  const [batchData, setBatchData] = useState({
    batchId: '',
    batchName: '',
    strength: '',
    courseIds: [], // changed to an array
  });

  const handleChange = (e) => {
    const { name, options } = e.target;
    const selectedCourses = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setBatchData((prevData) => ({
      ...prevData,
      [name]: selectedCourses,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAddbatch(batchData);
      setBatchData({ batchId: '', batchName: '', strength: '', courseIds: [] });
    } catch (error) {
      console.error('Error adding batch:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="batchId"
        placeholder="Batch ID"
        value={batchData.batchId}
        onChange={(e) => setBatchData((prevData) => ({ ...prevData, batchId: e.target.value }))}
        required
      />
      <Input
        type="text"
        name="batchName"
        placeholder="Batch Name"
        value={batchData.batchName}
        onChange={(e) => setBatchData((prevData) => ({ ...prevData, batchName: e.target.value }))}
        required
      />
      <Input
        type="text"
        name="strength"
        placeholder="Strength"
        value={batchData.strength}
        onChange={(e) => setBatchData((prevData) => ({ ...prevData, strength: e.target.value }))}
        required
      />
      <Select
        name="courseIds"
        value={batchData.courseIds}
        onChange={handleChange}
        multiple // allow multiple selection
        required
      >
        {courses.map(course => (
          <option key={course.courseId} value={course.courseId}>
            {course.courseId}
          </option>
        ))}
      </Select>
      <Button type="submit">Add Batch</Button>
    </Form>
  );
};

export default AddBatchForm;
