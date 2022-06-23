import React, { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        });
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
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                done: e.target.checked
                            }
                        });
                    }} />
                <label className="form-check-label">
                    <span className='me-3'>{taskContent}</span>
                    <i className="bi bi-x-square text-danger" role="button" onClick={() => {
                        dispatch({
                            type: 'deleted',
                            id: task.id
                        });
                    }}>
                        {" "}Delete
                    </i>
                </label>
            </div>
        </>
    );
};

const TaskList = () => {
    const tasks = useTasks();
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