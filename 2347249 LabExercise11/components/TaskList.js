// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
