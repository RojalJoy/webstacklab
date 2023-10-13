// src/App.js
import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editSelectedTask = (task) => {
    setEditTask(task);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
    setEditTask(null);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onSave={editTask ? updateTask : addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editSelectedTask} />
    </div>
  );
};

export default App;
