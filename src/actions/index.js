export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const COMPLETE_NOTE = "COMPLETE_NOTE";

todoId = 0;

export const addNote = n => {
  return {
    type: ADD_NOTE,
    payload: {
      note: n,
      id: todoId++
    }
  };
};

export const completeNote = id => {
  return {
    type: COMPLETE_NOTE,
    payload: {
      id
    }
  };
};

export default deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: {
      id
    }
  };
};
