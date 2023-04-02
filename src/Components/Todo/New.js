import React from "react";
import "./New.css";

export default function ToDoNew() {
  return (
    <div className="new-item">
      <input type="text" class="form-control" placeholder="New Todo Item" />
      <button className="btn btn-primary">Add</button>
    </div>
  );
}
