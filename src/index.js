import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const DATA = [
  { id: "todo-0", name: "Adfar Batch A 8:00am to 11:00am", completed: true },
  { id: "todo-1", name: "Data Structure Practice 11:30am to 4:00pm", completed: false },
  { id: "todo-2", name: "Adfar TA 6:30pm to 8:30pm", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
