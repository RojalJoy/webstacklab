// src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task">
      <span>{task.name}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onEdit(task)}>Edit</button>
    </div>
  );
};

export default Task;
