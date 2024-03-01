import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import hoursPlayedReducer from "../features/hoursPlayed/hoursPlayedSlice";
export default configureStore({
    reducer: {
        hoursPlayedReducer
    }
});

setupListeners(configureStore.dispatch)