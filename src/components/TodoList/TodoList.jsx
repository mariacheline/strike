import React from "react";

import { TodoItem } from "../../components";
import { StyledTodoList } from "./style";

const TodoList = ({ notesList, handleDelete, handleCompletion }) => {
  const todos = notesList.filter(item => !item.isCompleted);
  const completed = notesList.filter(item => item.isCompleted);

  console.log(todos);

  return (
    <StyledTodoList>
      {todos.length > 0 && (
        <li>
          <h4>To do:</h4>
          {todos.map(item => {
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
        </li>
      )}

      {completed.length > 0 && (
        <li className="completed-list">
          <h4>Completed:</h4>
          {completed.map(item => {
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
        </li>
      )}
    </StyledTodoList>
  );
};

export default TodoList;
