export const addDinner = dinner => {
  return {
    type: 'ADD_DINNER',
    dinner
  };
};

export const setDinners = dinners => {
  return {
    type: 'SET_DINNERS',
    dinners
  };
};

export const removeDinner = dinnerId => {
  // debugger
  return {
    type: 'REMOVE_DINNER',
    dinnerId
  };
};
