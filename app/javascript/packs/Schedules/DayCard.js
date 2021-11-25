import React from 'react';
import { daysInMonth, MONTHS } from './index';
import { useTranslation } from 'react-i18next';

export default function DayCard({ dayOfWeek, dayOfMonth, today, year, month, lightBorder, onClick }) {
  const daysThisMonth = daysInMonth(typeof month === 'number' ? month + 1 : MONTHS.indexOf(month) + 1, year);
  const getRealDayOfMonth = () => {
    if (dayOfMonth > daysThisMonth) return dayOfMonth - daysThisMonth;
    if (dayOfMonth > 0) return dayOfMonth;
    const daysLastMonth = daysInMonth(typeof month === 'number' ? month : MONTHS.indexOf(month), year);
    return daysLastMonth + dayOfMonth;
  };
  getRealDayOfMonth(0);
  return (
    <div
      onClick={onClick ? onClick : () => {}}
      className={`DayCard ${today ? 'green-back' : ''} ${lightBorder && 'light-border'}`}>
      <div className={'day-of-month'}>{getRealDayOfMonth()}</div>
      <div className='day-of-week'>{dayOfWeek}</div>
    </div>
  );
}
