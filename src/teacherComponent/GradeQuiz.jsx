import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GradeQuiz = () => {
    const [courses, setCourses] = useState([]);
    const [batches, setBatches] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [grades, setGrades] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('');
    const teacherId = localStorage.getItem('userName'); 

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8080/teacher/courses', {
                    params: { teacherId }
                });
                const courses = response.data;
                setCourses(courses);
                if (courses.length > 0) {
                    setSelectedCourse(courses[0].courseId);
                }
            } catch (error) {
                console.error('Error fetching teacher courses:', error);
            }
        };
        fetchCourses();
    }, [teacherId]);

    useEffect(() => {
        const fetchBatches = async () => {
            try {
                if (selectedCourse) {
                    const response = await axios.get('http://localhost:8080/teacher/batches', {
                        params: { teacherId }
                    });
                    const batches = response.data.filter(batch => batch.courseIds.includes(selectedCourse));
                    setBatches(batches);
                    if (batches.length > 0) {
                        setSelectedBatch(batches[0].batchId);
                    }
                }
            } catch (error) {
                console.error('Error fetching batches:', error);
            }
        };
        fetchBatches();
    }, [teacherId, selectedCourse]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                if (selectedCourse && selectedBatch) {
                    const response = await axios.get('http://localhost:8080/quizzes', {
                        params: { courseId: selectedCourse, batchId: selectedBatch  }
                    });
                    setQuizzes(response.data);

                    const initialGrades = response.data.flatMap(quiz =>
                        quiz.students.map(student => ({
                            quizId: quiz.quizId,
                            studentId: student.studentId,
                            grade: student.grade || quiz.grade,
                            gradedMarks: student.gradedMarks || ''
                        }))
                    );
                    setGrades(initialGrades);
                }
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };
        fetchQuizzes();
    }, [selectedCourse, selectedBatch]);

    const handleGradeChange = (quizId, studentId, value) => {
        const newGrades = grades.map(grade =>
            grade.quizId === quizId && grade.studentId === studentId
                ? { ...grade, grade: value }
                : grade
        );
        setGrades(newGrades);
    };

    const handleGradedMarksChange = (quizId, studentId, value) => {
        const newGrades = grades.map(grade =>
            grade.quizId === quizId && grade.studentId === studentId
                ? { ...grade, gradedMarks: value }
                : grade
        );
        setGrades(newGrades);
    };

    const handleAddGrade = async () => {
        try {
            await axios.post('http://localhost:8080/grades', { courseId: selectedCourse, batchId: selectedBatch, grades });
            console.log('Grades added successfully');
            setGrades([]);
        } catch (error) {
            console.error('Error adding grades:', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#404a6d8a', color: '#333', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
            <h2>Grade Quizzes</h2>
            <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse} style={{ backgroundColor: "rgb(166, 175, 202)", color: "black" }}>
                {courses.map(course => (
                    <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
                ))}
            </select>
            <select onChange={(e) => setSelectedBatch(e.target.value)} value={selectedBatch} style={{ backgroundColor: "rgb(166, 175, 202)", color: "black" }}>
                {batches.map(batch => (
                    <option key={batch.batchId} value={batch.batchId}>{batch.batchName}</option>
                ))}
            </select>
            {quizzes.map((quiz) => (
                <div key={quiz.quizId} style={{ marginBottom: '20px' }}>
                    <h2 style={{display:"block",backgroundColor:"slategray",color:'#810202'}}>{quiz.quizName}</h2>
                    {quiz.students.map((student) => (
                        <div key={student.studentId} style={{ marginBottom: '10px' }}>
                            <h4>{student.studentId}</h4>
                            <input
                                type="text"
                                placeholder={quiz.grade}
                                value={grades.find(g => g.quizId === quiz.quizId && g.studentId === student.studentId)?.grade || ''}
                                onChange={(e) => handleGradeChange(quiz.quizId, student.studentId, e.target.value)}
                                style={{ display: 'block', width: '48%', padding: '8px', backgroundColor: 'rgb(166, 175, 202)', color: 'black', float: 'left', marginTop: '5px' ,fontWeight:"bolder"}}
                            />
                            <input
                                type="text"
                                placeholder="Graded Marks"
                                value={grades.find(g => g.quizId === quiz.quizId && g.studentId === student.studentId)?.gradedMarks || ''}
                                onChange={(e) => handleGradedMarksChange(quiz.quizId, student.studentId, e.target.value)}
                                style={{ display: 'block', width: '48%', padding: '8px', backgroundColor: 'rgb(166, 175, 202)', color: 'black', float: 'left', marginTop: '5px', marginLeft: '5px' }}
                            />
                        </div>
                    ))}
                </div>
            ))}

            <button onClick={handleAddGrade} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', clear: 'both' }}>
                Add Grades
            </button>
        </div>
    );
};

export default GradeQuiz;
