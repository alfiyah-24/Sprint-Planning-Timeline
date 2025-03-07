import React from "react";
import Header from "./components/Header";
import SprintList from "./components/SprintList";
import WeeklyView from "./components/WeeklyView";
import BottomControls from "./components/BottomControls";
import HeaderRow from "./components/HeaderRow";
import MonthCalc from "./components/MonthCalc";
import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeaderRow 
        leftHeader={<div className="sprint-list-header"><strong><center>Sprints</center></strong></div>} 
        rightHeader={<div className="month-header"><MonthCalc /></div>} 
      />
      
      <div className="main-content">
      <div className="left-panel">
    <SprintList />
  </div>
  <div className="right-panel">
    <WeeklyView />
  </div>
      
      </div>
      <BottomControls />
    </div>
  );
}

export default App;
