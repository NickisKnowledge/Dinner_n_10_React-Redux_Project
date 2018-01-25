export const addDinner = dinner => {
  return { type: 'ADD_DINNER', dinner };
};

export const setDinners = dinners => {
  return { type: 'SET_DINNERS', dinners };
};

export const removeDinner = dinnerId => {
  return { type: 'REMOVE_DINNER', dinnerId };
};

export const substituteDinner = dinner => {
  return { type: 'SUBSTITUTE_DINNER', dinner };
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

export const deleteDinner = (dinnerId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/dinners/${dinnerId}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.status === 204) {
        routerHistory.replace('/dinners')
        dispatch(removeDinner(dinnerId));
      }
    }).catch(err =>  console.log(err));
  };
};

export const updateDinner = (dinner, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/dinners/${dinner.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dinner })
    })
    .then(res => res.json())
    .then(dinner => {
      dispatch(substituteDinner(dinner));
      routerHistory.replace('/dinners')
    }).catch(err => console.log(err));
  };
};
