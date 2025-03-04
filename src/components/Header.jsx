import React, { useState } from "react";
import { TextField, Dropdown, DefaultButton, IconButton } from "@fluentui/react";
import { PersonAddRegular } from "@fluentui/react-icons";
import "./Header.css";
import { initializeIcons } from "@fluentui/react";

initializeIcons(); 

const statusOptions = [
  { key: "todo", text: "To Do" },
  { key: "inprogress", text: "In Progress" },
  { key: "done", text: "Done" },
];

const epicOptions = [
  { key: "epic1", text: "Epic 1" },
  { key: "epic2", text: "Epic 2" },
];

const Header = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedEpic, setSelectedEpic] = useState(null);

  return (
    <div className="header-container">
      {/*Search Bar */}
      <div className="header-left">
        <TextField
          placeholder="Search timeline"
          className="search-input"
          underlined
        />
      </div>

      {/* User Icons and Filters */}
      <div className="header-center">
        <div className="user-icons">
          <div className="user-initials">A</div>
          <div className="user-add">
            <PersonAddRegular className="user-add-icon" />
          </div>
        </div>

        <Dropdown
          placeholder="Status category"
          options={statusOptions}
          selectedKey={selectedStatus}
          onChange={(e, option) => setSelectedStatus(option.key)}
          className="dropdown"
        />
        <Dropdown
          placeholder="Epic"
          options={epicOptions}
          selectedKey={selectedEpic}
          onChange={(e, option) => setSelectedEpic(option.key)}
          className="dropdown"
        />
      </div>

      {/* - View Settings */}
      <div className="header-right">
        <DefaultButton
          text="View settings"
          className="view-settings-button"
          iconProps={{ iconName: "Settings" }}
        />
      </div>
    </div>
  );
};

export default Header;
