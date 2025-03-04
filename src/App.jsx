import React from "react";
import Header from "./components/Header";
import SprintList from "./components/SprintList";
import TimelineGrid from "./components/WeeklyView";
import BottomControls from "./components/BottomControls";
import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="timeline-container">
       <div className="left-panel">
        
          <SprintList />
        </div>
        <div className="right-panel">
          <TimelineGrid />
        </div>
      </div>
      <BottomControls />
    </div>
  );
}

export default App;
