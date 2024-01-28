
import { createStore, combineReducers } from 'redux'

// action type
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// //action
// {
//   type: INCREMENT
// }

//action creator
export const increment = (payload) => ({
  type: INCREMENT,
  payload
})

export const decrement = (payload) => ({
  type: DECREMENT,
  payload
})

// //dispatch
// dispatch(increment({payload: 1}))

//reducer
const countReducer = (/*precious state*/state = 0, action) => {
  
  // processing area
  switch(action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    default:
      return state
  }
  
  // return state // next state
}

const ADD_TO_HISTORY = 'ADD_TO_HISTORY'
const CLEAR_HISTORY = 'CLEAR_HISTORY'

let id = 1;
function generateID(){
  return id++;
}

export const addHistory = (history) => ({
  type: ADD_TO_HISTORY,
  payload: {
    id: generateID(),
    action: history.action,
    count: history.count,
    time: new Date().toLocaleTimeString()
  }
})

export const clearHistory = () => ({
  type: CLEAR_HISTORY
})

const historyReducer = (state =[], action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [...state, action.payload]
    case CLEAR_HISTORY:
      return []
    default:
      return state
  }
}

// store
const store = createStore(combineReducers({
  count: countReducer,
  history: historyReducer
}))

// //presentation
// console.log(store.getState());
// store.dispatch(increment(1));
// store.dispatch(addHistory({action: 'INCREMENT', count: 1}));
// store.dispatch(increment(5));
// store.dispatch(addHistory({action: 'INCREMENT', count: 5}));
// console.log(store.getState());


export default store;