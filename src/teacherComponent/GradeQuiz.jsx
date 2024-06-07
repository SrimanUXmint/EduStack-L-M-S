import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GradeQuiz = ({ courseId, batchId }) => {
    const [quizzes, setQuizzes] = useState([]);
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/attemptedquizzes', {
                    params: { courseId, batchId }
                });
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };

        if (courseId && batchId) {
            fetchQuizzes();
        }
    }, [courseId, batchId]);

    const handleGradeChange = (quizId, studentId, value) => {
        const newGrades = grades.map(grade => 
            grade.quizId === quizId && grade.studentId === studentId
                ? { ...grade, grade: value }
                : grade
        );
        setGrades(newGrades);
    };

    const handleAddGrade = async () => {
        try {
            await axios.post('http://localhost:8080/grades', { courseId, batchId, grades });
            console.log('Grades added successfully');
            setGrades([]);
        } catch (error) {
            console.error('Error adding grades:', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#404a6d8a', color: '#333', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
            <h2>Grade Quizzes</h2>
            {quizzes.map((quiz) => (
                <div key={quiz.quizId} style={{ marginBottom: '20px' }}>
                    <h3>{quiz.quizTitle}</h3>
                    {quiz.students.map((student) => (
                        <div key={student.studentId} style={{ marginBottom: '10px' }}>
                            <span>{student.studentName} ({student.studentId})</span>
                            <input
                                type="text"
                                placeholder="Grade"
                                value={grades.find(g => g.quizId === quiz.quizId && g.studentId === student.studentId)?.grade || ''}
                                onChange={(e) => handleGradeChange(quiz.quizId, student.studentId, e.target.value)}
                                style={{ display: 'block', width: '48%', padding: '8px', backgroundColor: '#a6afca', color: 'black', float: 'left', marginTop: '5px' }}
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
