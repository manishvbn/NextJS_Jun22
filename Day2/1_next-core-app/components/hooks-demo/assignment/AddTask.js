import React, { useState } from 'react';

const AddTask = () => {
    const [text, setText] = useState('');

    return (
        <div className='input-group'>
            <input className='form-control'
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                className='btn btn-outline-primary' onClick={() => {
                    setText('');
                }}>Add</button>
        </div>
    );
};

export default AddTask;