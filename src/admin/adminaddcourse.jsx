import React, { useState ,useEffect} from 'react';
import AdminPanel from './adminaddcoursetemplate';
import ClickableTabs from './ClickableTabsbatch';
import styled from 'styled-components';
import axios from 'axios';
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Adminadd=()=> {
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);

  const fetchCoursesAndBatches = async () => {
    try {
      const coursesResponse = await axios.get('http://165.232.185.65:8080/courses');
      setCourses(coursesResponse.data);

      const batchesResponse = await axios.get('http://165.232.185.65:8080/batches');
      setBatches(batchesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoursesAndBatches();
  }, []);

  const handleAddcourse = async (courseData) => {
    try {
      const response = await axios.post('http://165.232.185.65:8080/courses', courseData);
      // Fetch the updated list of courses after adding a new course
      const updatedCoursesResponse = await axios.get('http://165.232.185.65:8080/courses');
      setCourses(updatedCoursesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleAddbatch = async (batchData) => {
    try {
      const response = await axios.post('http://165.232.185.65:8080/batches', batchData);
      // Fetch the updated list of batches after adding a new batch
      const updatedBatchesResponse = await axios.get('http://165.232.185.65:8080/batches');
      setBatches(updatedBatchesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
     <div>
        <div className="hqu6j3os">
          <div className="ij6mk5pj">
            <div className="jmcs0gbx">
              <div className="gyc3f8q6">
                <div className="zzxrsn6l">
                  <div className="fm5eardc">
                    <div className="bkie7gg0" style={{width:"600px",padding:"40px"}}>
                    <div style={{ padding: '20px' }}>
                    <Container>
    
      <AdminPanel onAddcourse={handleAddcourse} onAddbatch={handleAddbatch}  courses={courses} />
      <ClickableTabs courses={courses} batches={batches}  />
    </Container>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}
export default Adminadd;