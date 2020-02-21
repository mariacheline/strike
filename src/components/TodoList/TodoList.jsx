import React from "react";

import { TodoItem } from "../../components";

const TodoList = ({ notesList, handleDelete, handleCompletion }) => {
  return (
    <ul>
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
    </ul>
  );
};

export default TodoList;
