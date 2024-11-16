# Recurring Date Picker

## Table of Contents
- Introduction
- Features
- Technologies Used
- Installation and Usage
- Component Structure
- Browser Support
- Contributing
- Acknowledgments
- Contact

## Introduction
A modern, flexible Next.js component for selecting and visualizing recurring dates. This component provides an intuitive interface for creating recurring events with daily, weekly, monthly, or yearly patterns, complete with a visual calendar preview.

## Features
- 📅 Visual calendar preview with recurring date highlighting
- 🔄 Multiple recurrence patterns (daily, weekly, monthly, yearly)
- 📊 Customizable intervals for daily recurrence
- 📆 Weekly day selection with multi-day support
- 🎯 Start and end date boundaries
- 🎨 Clean, modern UI with Tailwind CSS
- 📱 Responsive design

## Technologies Used
- Frontend: HTML, CSS, JavaScript, Next.js, TailwindCSS
- State Management: Zustand

## Installation and Usage
Follow these steps to set up and run the Next.js application on your local machine:
1. Clone the repository: `https://github.com/dhanasekhardsv/recurring-date-picker.git`
2. Navigate to the project directory: `cd recurring-date-picker`
3. Install dependencies:
    1. Using npm: `npm install`
    2. Using yarn: `yarn install`
4. Start the development server:
    1. Using npm: `npm run dev`
    2. Using yarn: `yarn dev`
5. Open your browser and navigate to `http://localhost:3000` to view the application

Note: If not able to install dependencies in step 3, please add `--force` flag at the end and try installing again.

## Component Structure
The date picker is composed of several components:
- `StartEndDatePicker`: Handles date range selection
- `RecurrenceOptions`: Manages recurrence patterns and options
- `CalendarPreview`: Displays visual preview of selected dates
- `useDatePickerStore`: Centralized state management using Zustand

## Browser Support
- Chrome
- Firefox
- Safari
- Edge

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards for new features.

## Acknowledgments
- Built with Next.js and Zustand
- Styled with TailwindCSS
- Icons from Lucide React

## Contact
For any questions or feedback, please contact me at `dhanasekhardsv@gmail.com` or `https://www.linkedin.com/in/dhana-sekhar/`.
