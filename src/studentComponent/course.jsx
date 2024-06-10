
import Coursetemplate from './coursetemplate';
import Quizes from './quizes';
import  { useEffect, useState } from 'react';
import axios from 'axios';


const Course = () => {
  const [data, setData] = useState([]);
  const [batchName, setBatchName] = useState('');
  const [quizzes, setQuizzes] = useState([]);
  const courseimage="https://www.hurix.com/wp-content/uploads/2019/12/Picture2.png";
  useEffect(() => {
    const userid = localStorage.getItem('userName');

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/coursedata?name=${userid}`);
        setData(response.data.courses);
        setBatchName(response.data.batchName.batchName);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }

      try {
        const quizResponse = await axios.get(`http://localhost:8080/studentquizes?name=${userid}`);
        setQuizzes(quizResponse.data);
      } catch (error) {
        console.error('Error fetching leave data:', error);
      }
    };

    fetchData();
  }, []);

 
  return (
    <div className="hqu6j3os">
      <div className="ij6mk5pj">
        <div className="jmcs0gbx">
          <div className="gyc3f8q6">
            <div className="zzxrsn6l">
              <div className="fm5eardc">
                <Coursetemplate coursedata={data} batchName={batchName} courseimage={courseimage} />
              </div>
            </div>
            <div className="t7dfxse1">
              <h4 className="u006f4f1">Upcoming quiz</h4>
              <Quizes quizdata={quizzes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
