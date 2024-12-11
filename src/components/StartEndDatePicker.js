import React from 'react'
import { setEndDate, setStartDate } from '../store/datePicker/datePickerSlice';
import { formatDateForInput } from '../utils';
import { useDispatch, useSelector } from 'react-redux';

const StartEndDatePicker = () => {
    const { startDate, endDate } = useSelector(store => store.datePicker);
    const dispatch = useDispatch();

    const handleDateChange = (e, type) => {
        const date = e.target.value ? new Date(e.target.value + 'T12:00:00') : null;
        if (type === 'start') {
            dispatch(setStartDate(date));
            if (endDate && date > endDate) {
                dispatch(setEndDate(null));
            }
        } else {
            dispatch(setEndDate(date));
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid space-y-2">
                <label htmlFor="start-date" className="text-sm font-medium text-gray-700">Start Date</label>
                <input type="date" id="start-date" value={formatDateForInput(startDate)} onChange={(e) => handleDateChange(e, 'start')}
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="grid space-y-2">
                <label htmlFor="end-date" className="text-sm font-medium text-gray-700">End Date (Optional)</label>
                <input type="date" id="end-date" value={formatDateForInput(endDate)} min={formatDateForInput(startDate)} onChange={(e) => handleDateChange(e, 'end')}
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
            </div>
        </div>
    );
}

export default StartEndDatePicker