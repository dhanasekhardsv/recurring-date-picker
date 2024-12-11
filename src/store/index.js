import { configureStore } from "@reduxjs/toolkit";
import { datePickerReducer } from "./datePicker/datePickerSlice";

const store = configureStore({
    reducer: {
        datePicker: datePickerReducer
    },
    devTools: true
});

export default store;