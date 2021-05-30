import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    onAddTask("Nova Tarefa", "Pendente");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {
          let tasksToRender;
          if (tasks) {
          tasksToRender = tasks.map(task => {
           return <div key={task.id}>{tasks.title}</div>
          });
         }
         return <div>{tasksToRender}</div>;
        }
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

TaskList.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
