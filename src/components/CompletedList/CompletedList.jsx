import React from "react";
import { TodoItem } from "../TodoItem";

const CompletedList = ({ notesList, handleDelete, handleCompletion }) => {
  return (
    <ul>
      {notesList.map(item => {
        if (item.isCompleted) {
          return (
            <TodoItem
              key={item.id}
              note={item.note}
              handleDelete={handleDelete}
              handleCompletion={handleCompletion}
              isCompleted={item.isCompleted}
            />
          );
        }
      })}
    </ul>
  );
};

export default CompletedList;
