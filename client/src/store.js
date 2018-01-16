import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import dinners from './reducers/dinnersReducer'

const reducers = combineReducers({ dinners })

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
