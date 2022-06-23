import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const Assignment = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div>
                <h2>Assignment</h2>
                <AddTask />
                <TaskList />
            </div>
        </div>
    );
};

export default Assignment;