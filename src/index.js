import { createStore } from "redux";

const plus = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD })
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
}

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
