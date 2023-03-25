import React from "react";

export default function ShowTask({ tasklist, setTasklist, task, setTask }) {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((inputedTask) => inputedTask.id === id);
    // console.log(selectedTask);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(
      (inputedTask) => inputedTask.id !== id
    );
    setTasklist(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
          <button onClick={() => setTasklist([])} className="clearAll">
            Clear All
          </button>
        </div>
      </div>

      <ul>
        {tasklist.map((inputedTask) => (
          <li key={task.id}>
            <p>
              <span className="name">{inputedTask.name}</span>
              <span className="time">{inputedTask.time}</span>
            </p>
            <i
              onClick={() => handleEdit(inputedTask.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(inputedTask.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
}
