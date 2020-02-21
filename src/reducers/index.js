import { ADD_NOTE, COMPLETE_NOTE, DELETE_NOTE } from "../actions";

const initialState = {
  notes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        note: action.payload.note,
        id: action.payload.id
      };

      return {
        ...state,
        notes: [...state.notes, newNote]
      };
    case COMPLETE_NOTE:
      const toggledNotes = state.notes.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        }
        return item;
      });

      return {
        ...state,
        notes: toggledNotes
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducer;
