export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_DINNER': {
      return state.concat(action.dinner);
    }

    case 'REMOVE_DINNER': {
      const idx = state.findIndex(dinner => dinner.id === action.dinnerId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    }

    case 'SET_DINNERS': {
      return action.dinners;
    }

    default: {
      return state;
    }
  };
};
