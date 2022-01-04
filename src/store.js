import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer([], {
  [addTodo.type]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo.type]: (state, action) => state.filter(toDo => toDo.id !== action.payload);
})

export const actionCreators = {
  addTodo,
  deleteTodo
};

const store = createStore(reducer);
export default store;
