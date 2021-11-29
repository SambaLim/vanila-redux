import { createStore } from "redux";

const plus = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const countModifierReducer = (state = 0) => {
  return state;
};
const countStore = createStore(countModifierReducer);

console.log(countStore.getState());
