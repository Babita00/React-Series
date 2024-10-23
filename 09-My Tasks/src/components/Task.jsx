import { useState, useEffect } from "react";

function Task() {
  // Initialize tasks from localStorage or as an empty array.
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTaskDescription, setNewTaskDescription] = useState("");

  // Save tasks to localStorage whenever the tasks state changes.
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task to the list.
  const addTask = (description) => {
    setTasks([...tasks, { id: Date.now(), description, isCompleted: false }]);
  };

  // Delete a task by filtering it out of the tasks array.
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle the completion status of a task.
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  // Handle the form submission to add a new task.
  const handleAdd = (e) => {
    e.preventDefault();
    if (newTaskDescription.trim()) {
      addTask(newTaskDescription);
      setNewTaskDescription(""); // Clear input field after adding.
    }
  };

  // Component's return statement rendering the UI.
  return (
    <div>
      <h2>Task Manager</h2>
      <form onSubmit={handleAdd}>
        <input 
          type="text" 
          value={newTaskDescription} 
          onChange={(e) => setNewTaskDescription(e.target.value)} 
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
          >
            {task.description}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => toggleComplete(task.id)}>
              {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
