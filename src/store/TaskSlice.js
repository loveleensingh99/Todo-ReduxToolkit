import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({

    name: "Leenu",
    initialState: [
    ],
    reducers: {
        addTask(state, action) {
            state.push(action.payload)
        },
        removeTask(state, action) {
            return state.filter((_, i) => i !== action.payload);


        },
        clearAllTasks(state) {
            return [];
        }
    },
   
})

export default TaskSlice.reducer;
export const { addTask, removeTask, clearAllTasks } = TaskSlice.actions;