import React, { useEffect, useState } from "react";
import ToDoNew from "./New";
import ToDoList from "./List";
import "./Wrapper.css";
import TodoService from "../../ToDoService";

export default function ToDoWrapper() {
  let todoService = new TodoService();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    setItems(todoService.getAllTodos());
  }, []);

  const handleAddNewItem = (item) => {
    setNewItem(item);
    todoService.addTodo(item);
    todoService.save();
    setItems(todoService.getAllTodos());
  };

  return (
    <div className="todo-wrapper">
      <ToDoNew onChange={handleAddNewItem} />
      <ToDoList items={items} />
    </div>
  );
}
