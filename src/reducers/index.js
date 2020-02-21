import { ADD_NOTE, COMPLETE_NOTE, DELETE_NOTE } from "../actions";

const initialState = {
  notes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {};
    case COMPLETE_NOTE:
      return {};
    case DELETE_NOTE:
      return {};
    default:
      return state;
  }
};

export default reducer;
