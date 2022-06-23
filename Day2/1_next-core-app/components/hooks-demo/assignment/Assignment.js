import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContext';

const Assignment = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-6">
                <div>
                    <h2>Assignment</h2>
                    <TasksProvider>
                        <AddTask />
                        <TaskList />
                    </TasksProvider>
                </div>
            </div>
        </div>
    );
};

export default Assignment;