// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onSave }) => {
  const [taskName, setTaskName] = useState('');

  const handleSave = () => {
    if (taskName.trim() === '') {
      alert('Task name cannot be empty.');
    } else {
      onSave({ name: taskName });
      setTaskName('');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleSave}>Add Task</button>
    </div>
  );
};

export default TaskForm;
