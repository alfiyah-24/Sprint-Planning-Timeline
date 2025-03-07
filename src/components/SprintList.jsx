import React, { useState, useRef } from "react"; 
import { Button, TextField } from "@fluentui/react";
import EpicItem from "./EpicItem";
import "./SprintList.css";



const SprintList = () => {
  const [epics, setEpics] = useState([]); 
  const [newEpic, setNewEpic] = useState("");
  const [showEpicInput, setShowEpicInput] = useState(false);
  const inputRef = useRef(null);

  const addEpic = () => {
    if (!newEpic.trim()) return;

    setEpics((prevEpics) => [...prevEpics, newEpic]); 
    setNewEpic("");
    setShowEpicInput(false);
  };

  return (
    <div className="sprint-container">
      

      {/* Epics List */}
      <div className="epics-list">
        {epics.map((epic, index) => (
          <EpicItem key={index} epic={epic} />
        ))}
      </div>

      {/* Create Epic Input */}
      {showEpicInput ? (
        <TextField
          value={newEpic}
          onChange={(e) => setNewEpic(e.target.value)} 
          placeholder="What needs to be done?"
          autoFocus
          componentRef={inputRef} 
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addEpic();
            }
          }}
          onBlur={(e) => {
            if (!inputRef.current.contains(e.relatedTarget)) {
              setShowEpicInput(false); 
            }
          }}
        />
      ) : (
        <Button className="create-epic" onClick={() => setShowEpicInput(true)}>
          + Create Epic
        </Button>
      )}
    </div>
  );
};

export default SprintList;
