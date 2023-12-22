import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  searchTerm: "",
  selectedPriority: "",
  selectedDate: null,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toogleTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    setPriority: (state, action) => {
      state.selectedPriority = action.payload;
    },

    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    clearAll: (state) => {
      state.tasks = [];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const {
  addTask,
  removeTask,
  updateTask,
  toogleTask,
  setSearchTerm,
  clearSearchTerm,
  setPriority,
  setDate,
  clearAll,
} = taskSlice.actions;
export default taskSlice.reducer;
