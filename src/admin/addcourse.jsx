import { useState } from 'react';
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

const AddcourseForm = ({ onAddcourse }) => {
  const [courseData, setCourseData] = useState({
    courseId: '',
    courseName: '',
    duration:''
  });
  const [error,setError]=useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddcourse(courseData);
    setCourseData({ courseId: '', courseName: '',duration:'' });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="courseId"
        placeholder="Course ID"
        value={courseData.courseId}
        onChange={handleChange}
        required
      /> 
      <Input
        type="text"
        name="courseName"
        placeholder="Course Name"
        value={courseData.courseName}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="duration"
        placeholder="No of classes"
        value={courseData.duration}
        onChange={handleChange}
        required
      />
      {error && <div className={error} style={{width:"370px",padding:"15px",margin:"5px 0",fontSize:"14px",backgroundColor:"#f34646",color:"white",borderRadius:"5px",textAlign:"center"}}>{error}</div>}

      <Button type="submit">Add Course</Button>
    </Form>
  );
};

export default AddcourseForm;
