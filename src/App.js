import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/NavBar/Navbar";
import TaskList from "./components/TaskList/TaskList";

const task = {
  id: 0,
  title: "Nova Tarefa",
  state: "pendente"
};

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddtasks={addTask} tasks={tasks} />
        <TaskList title="Fazendo" />
        <TaskList title="Completo" />
      </div>
    </div>
  );
}
