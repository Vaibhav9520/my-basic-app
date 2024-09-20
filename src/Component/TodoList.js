import React, { useState } from "react";
import './TodoList.css';

function TodoList() {
  const [task, setTasks] = useState([
    { id: 1, name: "Breakfast" },
    { id: 2, name: "Lunch" },
    { id: 3, name: "Dinner" },
  ]);

  

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks(task.concat({ name: newTask }));
  };
  

  return (
    <div>
      <h1>To-do List with Edit Feature</h1>

      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a task"/>
      <button onClick={addTask}> Add Task</button>

        {task.map((task) => (
          <p key={task.id}>
            {task.name} <button>Edit</button>
          </p>
        ))}
    </div>
  );
}

export default TodoList;




