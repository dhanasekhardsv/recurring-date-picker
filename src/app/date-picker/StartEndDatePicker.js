"use client"
import React from 'react';
import { useDatePickerStore } from '@/hooks/useDatePickerStore';
import { formatDateForInput } from '@/utils';

const StartEndDatePicker = () => {
    const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore();

    const handleDateChange = (e, type) => {
        const date = e.target.value ? new Date(e.target.value + 'T12:00:00') : null;
        if (type === 'start') {
            setStartDate(date);
            if (endDate && date > endDate) {
                setEndDate(null);
            }
        } else {
            setEndDate(date);
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
};

export default StartEndDatePicker;