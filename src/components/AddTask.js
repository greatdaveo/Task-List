import React from "react";

export default function AddTask({ tasklist, setTasklist, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    // To edit the task
    if (task.id) {
      const date = new Date();
      const updatedTaskList = tasklist.map((inputedTask) =>
        inputedTask.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : inputedTask
      );
      setTasklist(updatedTaskList);
      setTask({});
    } else {
      // To add the newTaskList & the local Date and Time
      const date = new Date();

      const newTaskList = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTaskList]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Add task here"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}
