import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
})

const store = configureStore({ reducer: toDoSlice.reducer });

export const { add ,remove } = toDoSlice.actions;
export default store;
