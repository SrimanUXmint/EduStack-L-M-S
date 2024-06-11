
import React, { useState } from 'react';
import axios from 'axios';

const AddQuiz = ({ courseId, batchId }) => {
    const [quizName, setQuizName] = useState('');
    const [quizTime, setQuizTime] = useState('');
    const [grade, setGrade] = useState('');
    const [link, setLink] = useState('');
    const handleAddQuiz = async () => {
        
        try {
            const quizId = Date.now().toString().slice(0,5) + Math.floor(Math.random() * 1000).toString();
            await axios.post('http://localhost:8080/quizzes', { courseId, batchId, quizName, quizTime, quizId, grade, link });
            console.log('Quiz added successfully');
            setQuizName('');
            setQuizTime('');
            setGrade('');
            setLink('');
        } catch (error) {
            console.error('Error adding quiz:', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#404a6d8a', color: '#333', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
            <h2>Add Quiz</h2>
            <input
                type="text"
                placeholder="Quiz Name"
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#a6afca', color: 'black' }}
            />
            <input
                type="time"
                value={quizTime}
                onChange={(e) => setQuizTime(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#a6afca', color: 'black' }}
            />
            <input
                type="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#a6afca', color: 'black' }}
            />
            <input
                type="total"
                placeholder="Total Marks"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#a6afca', color: 'black' }}
            />
            <button onClick={handleAddQuiz} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
                Add Quiz
            </button>
        </div>
    );
};

export default AddQuiz;
