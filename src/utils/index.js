export const formatDateForInput = (date) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
};

export const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
        days.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push(new Date(year, month, i, 12, 0, 0));
    }

    return days;
};

export const isRecurringDate = (date, startDate, endDate, recurrenceType, interval, selectedDays) => {
    if (!date || !startDate) return false;

    const isWithinRange = date >= startDate && (!endDate || date <= endDate);
    if (!isWithinRange) return false;

    switch (recurrenceType) {
        case 'daily':
            const daysDifference = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
            return daysDifference >= 0 && daysDifference % interval === 0;
        case 'weekly':
            return selectedDays.includes(date.getDay());
        case 'monthly':
            return date.getDate() === startDate.getDate();
        case 'yearly':
            return date.getDate() === startDate.getDate() && date.getMonth() === startDate.getMonth();
        default:
            return false;
    }
};