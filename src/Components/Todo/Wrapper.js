import React from "react";
import ToDoNew from "./New";
import ToDoList from "./List";
import "./Wrapper.css";

export default function ToDoWrapper() {
  return (
    <div className="todo-wrapper">
      <ToDoNew />
      <ToDoList />
    </div>
  );
}
