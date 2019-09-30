import uuid from 'uuid';
const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, memes: [...state.memes, {...action.payload, id: uuid()}]};

    case "DELETE":  
      return { ...state, memes: [...state.memes.filter(m => m.id !== action.id) ] };

    default:
      return state;
  }
}

export default rootReducer;
