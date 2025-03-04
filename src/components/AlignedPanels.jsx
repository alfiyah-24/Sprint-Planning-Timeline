import React from "react";
import SprintList from "./SprintList";  
import WeeklyView from "./WeeklyView";  
import "./AlignedPanels.css";  
const AlignedPanels = () => {
  return (
    <div className="aligned-panels-container">
      {/*(Sprint List) */}
      <div className="left-panel">
        <div className="aligned-header left-header">Sprints</div>
        <SprintList />
      </div>

      {/*  (Weekly View) */}
      <div className="right-panel">
        <div className="aligned-header right-header">Timeline</div>
        <WeeklyView />
      </div>
    </div>
  );
};

export default AlignedPanels;
