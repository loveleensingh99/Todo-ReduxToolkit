
import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";



const appStore = configureStore({
    reducer: {
        tasks: TaskSlice,

    }
})

export default appStore;