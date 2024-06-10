import { useState, useEffect } from 'react';
import axios from 'axios';
import TimetableForm from './TimetableForm';
import Timetable from './Timetable';
import BatchSelector from './BatchSelector';

const Timetablee = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [batchTimetables, setBatchTimetables] = useState({});
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const teachersResponse = await axios.get('http://localhost:8080/teachers');
      setTeachers(teachersResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCoursesAndBatches = async () => {
    try {
      const coursesResponse = await axios.get('http://localhost:8080/courses');
      setCourses(coursesResponse.data);

      const batchesResponse = await axios.get('http://localhost:8080/batches');
      setBatches(batchesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTimetable = async (batchId) => {
    try {
      const timetableResponse = await axios.get('http://localhost:8080/timetable', { params: { batchId } });
      setBatchTimetables((prev) => ({
        ...prev,
        [batchId]: timetableResponse.data
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeachers();
    fetchCoursesAndBatches();
  }, []);

  useEffect(() => {
    if (selectedBatch) {
      fetchTimetable(selectedBatch);
    }
  }, [selectedBatch]);

  const handleSave = async (newTimetable) => {
    try {
      await axios.post('http://localhost:8080/timetable', { ...newTimetable, batchId: selectedBatch });
      fetchTimetable(selectedBatch);
    } catch (error) {
      console.error(error);
    }
  };

  // Filter courses for the selected batch
  const filteredCourses = courses.filter(course => 
    batches.find(batch => batch.batchId === selectedBatch)?.courseIds.includes(course.courseId)
  );

  return (
    <div style={{ padding: '20px', minWidth: '400px' }}>
      <h2 style={{ color: 'black' }}>Set Timetable</h2>
      <BatchSelector
        batches={batches.map(batch => batch.batchId)}
        selectedBatch={selectedBatch}
        onSelectBatch={setSelectedBatch}
      />
      {selectedBatch && (
        <>
          <TimetableForm onSave={handleSave} courses={filteredCourses} teachers={teachers} />
          <h2>Current Timetable for {selectedBatch}</h2>
          <Timetable data={batchTimetables[selectedBatch]} />
        </>
      )}
    </div>
  );
};

export default Timetablee;
