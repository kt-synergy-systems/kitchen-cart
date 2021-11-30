import React from 'react';
import DayCard from './DayCard';
import { MONTHS } from './index';
import { useTranslation } from 'react-i18next';
const translateMonth = (month) => {
  if (month === '1月') return 'JANUARY';
  if (month === '2月') return 'FEBRUARY';
  if (month === '3月') return 'MARCH';
  if (month === '4月') return 'APRIL';
  if (month === '5月') return 'MAY';
  if (month === '6月') return 'JUNE';
  if (month === '7月') return 'JULY';
  if (month === '8月') return 'AUGUST';
  if (month === '9月') return 'SEPTEMBER';
  if (month === '10月') return 'OCTOBER';
  if (month === '11月') return 'NOVEMBER';
  if (month === '12月') return 'DECEMBER';
  return month;
};
const DetailedSchedule = ({ schedules, dayOfWeek, dayOfMonth, year, month, isToday }) => {
  month = translateMonth(month.toUpperCase());
  const t = useTranslation().t;
  const timeRegex = /(?<=T)\d\d:\d\d(?=.)/;
  const goToMap = (lat, long) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`, '_blank');
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
  const deleteMe = (id) => {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      fetch(`/food_carts/${schedules.find((i) => i.id === id).food_cart_id}/schedules/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.ok) {
            window.location.reload();
          }
        });
    }
  };
  const getDetailedTimeInfo = (m, d, isToday) => {
    return getScheduleDataForDay(m, d).map((timeSlot, index) => (
      <div key={index} className='detailed-time-info flex-row'>
        <div className='flex-column'>
          <p>{timeSlot.start_time.match(timeRegex)}</p>
          <p>{timeSlot.end_time.match(timeRegex)}</p>
        </div>
        <div className={`place-info flex-row ${isToday ? 'green-border' : 'tan-border'}`}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              goToMap(timeSlot.latitude, timeSlot.longitude);
            }}>
            {timeSlot.location}
          </div>
          <a
            onClick={(e) => {
              e.preventDefault();
              deleteMe(timeSlot.id);
            }}>
            X
          </a>
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
      <div className={`times-container ${isToday ? 'green-text green-border' : 'tan-border'}`}>
        {getDetailedTimeInfo(MONTHS.indexOf(month) + 1, dayOfMonth, isToday ? true : false).length
          ? getDetailedTimeInfo(MONTHS.indexOf(month) + 1, dayOfMonth, isToday ? true : false)
          : t('alerts.food_cart_open')}
      </div>
    </div>
  );
};

export default DetailedSchedule;
