import React from "react";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDoList(props) {
  // console.log("🚀 ~ file: List.js:7 ~ ToDoList ~ props:", props);
  return (
    <div className="todo-list">
      <ul className="list-group">
        {props.items.map((item) => {
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="content d-flex justify-content-between">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value="{item.completed}"
                aria-label="..."
              />
              <div className="mx-2">{item.text}</div>
            </div>
            <FontAwesomeIcon icon={faTrash} />
          </li>;
        })}

        {/*         <li class="list-group-item d-flex justify-content-between align-items-center">
          <div className="content d-flex justify-content-between">
            <input
              class="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
            <div className="mx-2">Second checkbox</div>
          </div>
          <FontAwesomeIcon icon={faTrash} />
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center text-decoration-line-through">
          <div className="content d-flex justify-content-between">
            <input
              class="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
              checked="true"
            />
            <div className="mx-2 font-italic">Third checkbox</div>
          </div>
          <FontAwesomeIcon icon={faTrash} />
        </li> */}
      </ul>
    </div>
  );
}
