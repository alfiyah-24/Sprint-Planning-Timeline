import React, { useRef } from "react";
import "./TaskBar.css";

const TaskBar = ({ task, setTask, days }) => {
  const taskRef = useRef(null);

  const handleDragEnd = (e) => {
    const parentRect = taskRef.current.parentElement.getBoundingClientRect();
    const dayWidth = parentRect.width / days.length;
    const newStartDay = Math.round((e.clientX - parentRect.left) / dayWidth);
    setTask((prev) => ({ ...prev, startDay: newStartDay }));
  };

  return (
    <div
      ref={taskRef}
      className="task-bar"
      style={{
        left: `${task.startDay * (100 / days.length)}%`,
        width: `${task.duration * (100 / days.length)}%`,
      }}
      draggable
      onDragEnd={handleDragEnd}
    >
      Task
    </div>
  );
};

export default TaskBar;
