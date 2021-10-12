const date = new Date();

const today = `${date.getFullYear()}-${
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
}-${date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate()}`;

const stripTime = (t) => parseInt(t.match(/(?<=T)\d\d(?=:)/)[0]);
const getCurrentOpenHours = (scheduleForToday) => {
  let currentOpenSchedule;
  scheduleForToday.forEach((sched, index) => {
    const startHour = stripTime(sched.start_time);
    const endHour = stripTime(sched.end_time);
    if (endHour > date.getHours() && startHour <= date.getHours()) {
      currentOpenSchedule = scheduleForToday[index];
    }
  });
  return currentOpenSchedule;
};

const getSchedForToday = (scheds) => scheds.filter((s) => s.date === today);

export const getCurrentSchedule = (schedules) => {
  const scheduleForToday = getSchedForToday(schedules);
  return getCurrentOpenHours(scheduleForToday);
};
