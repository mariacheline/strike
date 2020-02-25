import React from "react";
import close from "../../assets/close.svg";
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
      <label>
        <input
          name="note"
          type="checkbox"
          onChange={() => handleCompletion(id)}
        />
        <span className="note-text">{note}</span>
      </label>
      <button onClick={() => handleDelete(id)}>
        <img src={close} alt="close_icon" />
      </button>
    </StyledItem>
  );
};

export default TodoItem;
