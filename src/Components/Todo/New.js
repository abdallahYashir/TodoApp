import React, { useState } from "react";
import "./New.css";

export default function ToDoNew(props) {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChangeInput = (event) => {
    if (event.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setValue(event.target.value);
  };

  const handleAddNew = () => {
    props.onChange(value);
  };

  return (
    <div className="new-item">
      <input
        type="text"
        className="form-control"
        placeholder="New Todo Item"
        value={value}
        onChange={handleChangeInput}
      />
      <button
        className="btn btn-primary"
        onClick={handleAddNew}
        disabled={disabled}
      >
        Add
      </button>
    </div>
  );
}
