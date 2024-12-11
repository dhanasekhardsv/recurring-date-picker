import React from 'react'
import StartEndDatePicker from '../../components/StartEndDatePicker'
import RecurrenceOptions from '../../components/RecurrenceOptions'
import CalendarPreview from '../../components/CalendarPreview'

const RecurringDatePicker = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-2 sm:p-5">
            <div className="flex justify-center">
                <div className="w-fit bg-white rounded-lg shadow-md p-5">
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Recurring Date Picker</h2>
                        <StartEndDatePicker />
                        <RecurrenceOptions />
                        <CalendarPreview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecurringDatePicker