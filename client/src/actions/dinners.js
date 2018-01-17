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

export const createDinner = (dinner, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/dinners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dinner })
    })
    .then(res => res.json())
    .then(dinner => {
      if (dinner.id) {
          dispatch(addDinner(dinner));
          routerHistory.push(`${dinner.id}`);
      } else {
        const err = dinner.errors.join('\n\n')
        alert(`${dinner.message}\n\n${err}`)
      }
    }).catch(err => console.log(err));
  };
};
