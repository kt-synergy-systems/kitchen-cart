import React from 'react';
import DayCard from './DayCard';
import { MONTHS } from './index';

const DetailedSchedule = ({
  schedules,
  dayOfWeek,
  dayOfMonth,
  year,
  month,
  isToday,
}) => {
  const timeRegex = /(?<=T)\d\d:\d\d(?=.)/;
  const goToMap = (lat, long) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`,
      '_blank'
    );
  };
  const getScheduleDataForDay = (m, d) => {
    const scheduleForDay = [];
    schedules.forEach((schedule) => {
      const arr = schedule.date.split('-');
      const y = parseInt(arr[0]);
      const myMonth = parseInt(arr[1]);
      const myDay = parseInt(arr[2].substring(0, 2));
      if (myMonth === m && myDay === d && y === year) {
        scheduleForDay.push(schedule);
      }
    });
    return scheduleForDay;
  };

  const getDetailedTimeInfo = (m, d, isToday) => {
    return getScheduleDataForDay(m, d).map((timeSlot, index) => (
      <div key={index} className='detailed-time-info flex-row'>
        <div className='flex-column'>
          <p>{timeSlot.start_time.match(timeRegex)}</p>
          <p>{timeSlot.end_time.match(timeRegex)}</p>
        </div>
        <div
          className={`place-info flex-row ${
            isToday ? 'green-border' : 'tan-border'
          }`}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              goToMap(timeSlot.latitude, timeSlot.longitude);
            }}>
            {timeSlot.location}
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className='detailed-schedule'>
      <DayCard
        dayOfWeek={dayOfWeek}
        dayOfMonth={dayOfMonth}
        year={year}
        month={month}
        lightBorder={isToday ? false : true}
        today={isToday ? true : false}
      />
      <div className={`divider ${isToday ? 'green-back' : 'tan-back'}`} />
      <div
        className={`times-container ${
          isToday ? 'green-text green-border' : 'tan-border'
        }`}>
        {getDetailedTimeInfo(
          MONTHS.indexOf(month) + 1,
          dayOfMonth,
          isToday ? true : false
        ).length
          ? getDetailedTimeInfo(
              MONTHS.indexOf(month) + 1,
              dayOfMonth,
              isToday ? true : false
            )
          : 'No schedule for this date'}
      </div>
    </div>
  );
};

export default DetailedSchedule;