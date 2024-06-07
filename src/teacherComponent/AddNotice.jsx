import React, { useState } from 'react';
import axios from 'axios';

const AddNotice = ({ courseId, batchId }) => {
 

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNotice = async () => {
        try {
            await axios.post('http://localhost:8080/notices', { courseId, batchId, title, content });
            console.log('Notice added successfully');
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error adding notice:', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#404a6d8a', color: '#333', padding: '20px', borderRadius: '5px', marginTop: '50px' }}>
            <h2>Add Notice</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#a6afca', color: 'black' }}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', backgroundColor: '#a6afca', color: 'black', height: '100px' }}
            />
            <button onClick={handleAddNotice} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
                Add Notice
            </button>
        </div>
    );
};

export default AddNotice;
