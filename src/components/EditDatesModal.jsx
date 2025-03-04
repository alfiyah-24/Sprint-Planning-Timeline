import React, { useState } from "react";
import { Dialog, DialogFooter, PrimaryButton, DefaultButton, TextField } from "@fluentui/react";
import { DatePicker } from "@fluentui/react";
import "./EditDatesModal.css";

const EditDatesModal = ({ isOpen, onClose, epic }) => {
  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const handleConfirm = () => {
    console.log("Start Date:", startDate);
    console.log("Due Date:", dueDate);
    onClose();
  };

  return (
    <Dialog hidden={!isOpen} onDismiss={onClose} modalProps={{ isBlocking: true }}>
      <div className="modal-content">
        <h2>Edit Dates</h2>
        <p>Leave the date fields blank to infer dates from the issue's sprint assignment.</p>

        <div className="epic-info">
          <span className="epic-name">📌 {epic}</span>
          <div className="dates-display">
            <div><strong>Start date:</strong> {startDate ? startDate.toLocaleDateString() : "None"}</div>
            <div><strong>Due date:</strong> {dueDate ? dueDate.toLocaleDateString() : "None"}</div>
          </div>
        </div>

        <div className="date-pickers">
          <DatePicker label="Start date" value={startDate} onSelectDate={setStartDate} />
          <DatePicker label="Due date" value={dueDate} onSelectDate={setDueDate} />
        </div>

        <DialogFooter>
          <DefaultButton onClick={onClose} text="Cancel" />
          <PrimaryButton onClick={handleConfirm} text="Confirm" disabled={!startDate || !dueDate} />
        </DialogFooter>
      </div>
    </Dialog>
  );
};

export default EditDatesModal;
