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

const API_URL = 'http://localhost:3001';
export const fetchDinners = () => {
  return dispatch => {
    return fetch(`${API_URL}/dinners`)
    .then(res => res.json())
    .then(dinners => {
      dispatch(setDinners(dinners));
    }).catch(err => console.log(err))
  };
};
