import React, { useState } from 'react';

const tasks = [
    { id: 0, text: 'Developer Learning Path', done: true },
    { id: 1, text: 'Visit office', done: false },
    { id: 2, text: 'Drink Coffee', done: false }
];

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                <span className='me-3'>{task.text}</span>
                <i className="bi bi-pencil-square text-warning" role="button" onClick={() => setIsEditing(true)}>{" "}Edit</i>
            </>
        );
    }

    return (
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" checked={task.done}
                    onChange={e => {
                        
                    }} />
                <label className="form-check-label">
                    <span className='me-3'>{taskContent}</span>
                    <i className="bi bi-x-square text-danger" role="button" onClick={() => {
                    }}>
                        {" "}Delete
                    </i>
                </label>
            </div>
        </>
    );
};

const TaskList = () => {
    return (
        <ul className='list-group-flush mt-4'>
            {tasks.map(task => (
                <li className='list-group-item text-start' key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;