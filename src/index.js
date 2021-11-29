import { plugins } from "pretty-format";
import { createStore } from "redux";

const plus = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") return count + 1;
  if (action.type === "MINUS") return count - 1;
  return count;
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" })
}

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" })
}

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
