import { create } from 'zustand';

export const useDatePickerStore = create((set) => ({
    startDate: new Date(),
    endDate: null,
    recurrenceType: 'reset',
    interval: 1,
    selectedDays: [],
    setStartDate: (date) => set({ startDate: date }),
    setEndDate: (date) => set({ endDate: date }),
    setRecurrenceType: (type) => set((state) => ({
        recurrenceType: type,
        selectedDays: type === 'weekly' ? state.selectedDays : []
    })),
    setInterval: (interval) => set({ interval: interval }),
    toggleSelectedDay: (day) => set((state) => ({
        selectedDays: state.selectedDays.includes(day) ? state.selectedDays.filter(d => d !== day) : [...state.selectedDays, day]
    })),
}));