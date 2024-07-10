import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  newTask: '',
};

export const todosSlice = createSlice({
  name: 'listTasks',
  initialState,
  reducers: {
    setInputTask: (state, action) => {
      const newTask = action.payload;
      state.newTask = newTask;
    },

    addTask: (state, action) => {
          
        if (state.newTask) {
            state.tasks.push(state.newTask);
            state.newTask = '';
        }
    },

    removeTask: (state, action) => {
      const newTasksList = state.tasks.filter((task, i) => i !== action.payload);
      state.tasks = newTasksList;
    },
  },
});


export const { setInputTask, addTask, removeTask } = todosSlice.actions;
export default todosSlice.reducer;
