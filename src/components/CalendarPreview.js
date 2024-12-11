import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react'
import { getDaysInMonth, isRecurringDate } from '../utils';
import { MONTHS, WEEK_DAYS } from '../constants/date-picker';
import { useDispatch, useSelector } from 'react-redux';

const CalendarPreview = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { startDate, endDate, recurrenceType, interval, selectedDays } = useSelector(store => store.datePicker);
    const dispatch = useDispatch();

    const navigateMonth = (direction) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
    };

    return (
        <div className="grid gap-2">
            <label htmlFor="" className="text-sm font-medium text-gray-700">Preview Calendar</label>
            <div className="flex items-center justify-between mb-2">
                <button onClick={() => navigateMonth(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-medium">
                    {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button onClick={() => navigateMonth(1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {
                    WEEK_DAYS.map(day => <div key={day} className="text-center text-sm font-medium">{day[0]}</div>)
                }
                {
                    getDaysInMonth(currentDate).map((date, index) => (
                        <div key={index}
                            className={`text-center p-2 text-sm rounded-md transition-colors ${!date ? 'invisible' : ''} 
                                ${isRecurringDate(date, startDate, endDate, recurrenceType, interval, selectedDays) ? 'bg-blue-200' : ''}
                                ${date && date.toDateString() === startDate.toDateString() ? 'bg-blue-500 text-white' : ''}`}>
                            {date ? date.getDate() : ''}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CalendarPreview