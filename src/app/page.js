import CalendarPreview from "./date-picker/CalendarPreview";
import RecurrenceOptions from "./date-picker/RecurrenceOptions";
import StartEndDatePicker from "./date-picker/StartEndDatePicker";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="w-fit bg-white rounded-lg shadow-md p-5 m-2 sm:m-5">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Recurring Date Picker</h2>
          <StartEndDatePicker />
          <RecurrenceOptions />
          <CalendarPreview />
        </div>
      </div>
    </div>
  );
}
