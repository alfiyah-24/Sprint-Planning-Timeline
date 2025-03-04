import React from "react";
import "./WeeklyView.css";
import TaskBar from "./TaskBar";
import { useState } from "react";

const WeeklyView = () => {
  const today = new Date();
  const currentDate = today.getDate();

  
  const days = Array.from({ length: 21 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - 7 + i);
    return {
      date,
      isSunday: date.getDay() === 0,
    };
  });

  
  const groupedByMonth = days.reduce((acc, { date }) => {
    const month = date.toLocaleString("default", { month: "short" });
    if (!acc[month]) acc[month] = [];
    acc[month].push(date);
    return acc;
  }, {});

  const [task, setTask] = useState({ startDay: 5, duration: 5 });

  return (
    <div className="timeline-grid-container">
      
      <div className="month-header">
        {Object.keys(groupedByMonth).map((month, index) => (
          <div
            key={index}
            className="month-label"
            style={{ flex: groupedByMonth[month].length }}
          >
            {month.toUpperCase()}
          </div>
        ))}
      </div>

     
      <div className="date-header">
        {days.map(({ date }) => (
          <div
            key={date.getTime()}
            className={`date-box ${date.getDate() === currentDate ? "active" : ""}`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>

      

      <div className="grid-body">
        {days.map(({ date, isSunday }) => (
          <div
            key={date.getTime()}
            className={`grid-column ${isSunday ? "sunday" : ""}`}
          ></div>
        ))}
        <TaskBar task={task} setTask={setTask} days={days} />
      </div>
    </div>
  );
};

export default WeeklyView;
