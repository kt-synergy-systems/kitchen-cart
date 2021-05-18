import React from 'react';

const Schedules = ({ schedules }) => {
  return <div>{schedules.map((schedule) => JSON.stringify(schedule))}</div>;
};

export default Schedules;
