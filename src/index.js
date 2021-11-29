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

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
