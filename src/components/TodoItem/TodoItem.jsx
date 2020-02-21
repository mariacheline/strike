import React from "react";
import { StyledItem } from "./style";

const TodoItem = ({
  id,
  note,
  isCompleted,
  handleDelete,
  handleCompletion
}) => {
  return (
    <StyledItem isCompleted={isCompleted}>
      <input type="checkbox" onChange={() => handleCompletion(id)} />
      <span>{note}</span>
      <button onClick={() => handleDelete(id)}>x</button>
    </StyledItem>
  );
};

export default TodoItem;
