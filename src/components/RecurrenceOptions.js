import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DAY_INTERVALS, RECURRENCE_OPTIONS, WEEK_DAYS } from '../constants/date-picker';
import { setInterval, setRecurrenceType, toggleSelectedDay } from '../store/datePicker/datePickerSlice';

const RecurrenceOptions = () => {
    const { recurrenceType, interval, selectedDays } = useSelector(store => store.datePicker);
    const dispatch = useDispatch();

    return (
        <div className="space-y-2">
            <label htmlFor="" className="text-sm font-medium text-gray-700">Recurring Options</label>
            <div className="flex flex-wrap gap-2">
                {RECURRENCE_OPTIONS.map((option) => (
                    <button key={option} onClick={() => dispatch(setRecurrenceType(option))}
                        className={`px-4 py-2 rounded-md capitalize transition-colors ${recurrenceType === option ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                        {option}
                    </button>
                ))}
            </div>
            {
                recurrenceType === 'daily' && (
                    <div className="flex items-center space-x-2 text-sm">
                        <span>Interval:</span>
                        <select value={interval} onChange={(e) => dispatch(setInterval(parseInt(e.target.value)))}
                            className="min-w-14 max-w-20 px-2 py-1 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
                            {
                                DAY_INTERVALS.map(num => <option key={num} value={num}>{num}</option>)
                            }
                        </select>
                        <span>{interval === 1 ? 'day' : 'days'}</span>
                    </div>
                )
            }
            {
                recurrenceType === 'weekly' && (
                    <div className="flex flex-wrap gap-2">
                        {WEEK_DAYS.map((day, index) => (
                            <button key={day} onClick={() => dispatch(toggleSelectedDay(index))}
                                className={`px-3 py-1 text-sm rounded-md transition-colors ${selectedDays.includes(index) ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                                {day}
                            </button>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default RecurrenceOptions