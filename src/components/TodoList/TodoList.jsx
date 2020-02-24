import React from "react";

import { TodoItem } from "../../components";
import { StyledTodoList } from "./style";

const TodoList = ({ notesList, handleDelete, handleCompletion }) => {
  return (
    <StyledTodoList>
      {notesList.map(item => {
        return (
          <TodoItem
            key={item.id}
            note={item.note}
            id={item.id}
            handleDelete={handleDelete}
            handleCompletion={handleCompletion}
            isCompleted={item.isCompleted}
          />
        );
      })}
    </StyledTodoList>
  );
};

export default TodoList;
