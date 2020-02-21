import React from "react";

const TodoItem = ({ note }) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{note}</span>
      <button>x</button>
    </li>
  );
};

export default TodoItem;
