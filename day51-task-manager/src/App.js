import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input.trim()]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setEditText("");
    }
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;
    const updated = [...tasks];
    updated[editIndex] = editText.trim();
    setTasks(updated);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Day 51 Task Manager</h1>

        {/* Add Task */}
        <div className="input-section">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task"
          />
          <button onClick={addTask}>Add</button>
        </div>

        {/* Task List */}
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty">No tasks yet 👀</p>
          ) : (
            tasks.map((task, index) => (
              <div className="task" key={index}>
                {editIndex === index ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  <span>{task}</span>
                )}

                <div className="task-buttons">
                  {editIndex === index ? (
                    <button className="save" onClick={saveEdit}>
                      Save
                    </button>
                  ) : (
                    <button className="edit" onClick={() => startEdit(index)}>
                      Edit
                    </button>
                  )}

                  <button className="delete" onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;




