import React from 'react';
import DayCard from './DayCard';

export const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];
const DAYS_OF_WEEK = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const Schedules = ({ schedules, foodCart }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const dayOfWeek = DAYS_OF_WEEK[date.getDay()];
  const dayOfMonth = date.getDate();
  const daysThisMonth = daysInMonth(date.getMonth() + 1, year);
  const getCalendarCards = () => {
    const cards = [];
    for (let i = 0; i < 7; i++) {
      const myDayOfMonth = i - date.getDay() + dayOfMonth;
      cards.push(
        <DayCard
          dayOfWeek={DAYS_OF_WEEK[i]}
          dayOfMonth={myDayOfMonth}
          key={i}
          year={year}
          month={date.getMonth()}
          today={dayOfMonth === myDayOfMonth ? true : false}
        />
      );
    }
    return cards;
  };
  const getScheduleDataForDay = (m, d) => {
    schedules.forEach((schedule) => {
      const arr = schedule.date.split('-');
      const y = parseInt(arr[0]);
      const myMonth = parseInt(arr[1]);
      const d = parseInt(arr[2].substring(0, 1));
      console.log(y, myMonth, d, '🎲');
    });
  };
  console.log(
    schedules,
    foodCart,
    year,
    month,
    dayOfWeek,
    dayOfMonth,
    daysThisMonth
  );
  return (
    <div className='Schedules'>
      <div className='top-calendar'>
        <div>WEEKLY SCHEDULE</div>
        <h2>{foodCart.name}</h2>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <div className='seperator' />
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            marginTop: '16px',
            marginBottom: '16px',
          }}>
          {getCalendarCards().map((card) => card)}
        </div>
      </div>
      <div className='detailed-schedules'>
        <div className='detailed-schedule today'>
          <DayCard
            dayOfWeek={dayOfWeek}
            dayOfMonth={dayOfMonth}
            year={year}
            month={month}
            today={true}
          />
          {getScheduleDataForDay(dayOfMonth, dayOfWeek)}
        </div>
        <div className='detailed-schedule tomorrow'>
          <DayCard
            dayOfWeek={DAYS_OF_WEEK[date.getDay() + 1]}
            dayOfMonth={dayOfMonth + 1}
            year={year}
            month={month}
            today={true}
          />
        </div>
        <div className='detailed-schedule asatte'>
          <DayCard
            dayOfWeek={DAYS_OF_WEEK[date.getDay() + 1]}
            dayOfMonth={dayOfMonth + 2}
            year={year}
            month={month}
            today={true}
          />
        </div>
      </div>
    </div>
  );
};
export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
export default Schedules;
