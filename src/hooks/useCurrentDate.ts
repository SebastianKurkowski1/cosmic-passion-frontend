import { useState, useEffect } from 'react';

function useDateInSql(daysBack?: number) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const adjustedDaysBack = daysBack ?? 0;
        currentDate.setDate(currentDate.getDate() - adjustedDaysBack);
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-based
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formatted = `${year}-${month}-${day}`;
        setFormattedDate(formatted);
    }, []);

    return formattedDate;
}

export default useDateInSql;