import React, { useState } from 'react';
import { useTasksDispatch } from './TasksContext';

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();

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
                    dispatch({
                        type: 'added',
                        id: nextId++,
                        text: text
                    })
                }}>Add</button>
        </div>
    );
};

let nextId = 3;

export default AddTask;