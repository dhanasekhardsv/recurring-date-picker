import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate: new Date(),
    endDate: null,
    recurrenceType: 'reset',
    interval: 1,
    selectedDays: [],
}

const datePickerSlice = createSlice({
    name: 'datePicker',
    initialState,
    reducers: {
        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        },
        setRecurrenceType: (state, action) => {
            state.recurrenceType = action.payload;
            state.selectedDays = (action.payload === 'weekly') ? state.selectedDays : [];
        },
        setInterval: (state, action) => {
            state.interval = action.payload;
        },
        toggleSelectedDay: (state, action) => {
            state.selectedDays = state.selectedDays.includes(action.payload) ? state.selectedDays.filter(d => d !== action.payload) : [...state.selectedDays, action.payload];
        }
    }
})

export const { setStartDate, setEndDate, setRecurrenceType, setInterval, toggleSelectedDay } = datePickerSlice.actions;
export const datePickerReducer = datePickerSlice.reducer;