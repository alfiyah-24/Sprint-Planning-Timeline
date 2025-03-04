import React, { useState } from "react";
import { IconButton, ContextualMenu } from "@fluentui/react";
import "./EpicItem.css";
import EditDatesModal from "./EditDatesModal";



const EpicItem = ({ epic }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuTarget, setMenuTarget] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const menuItems = [
    { key: "createIssue", text: "Create issue" },
    { key: "moveIssue", text: "Move issue", disabled: true },
    { key: "changeParentIssue", text: "Change parent issue", disabled: true },
    { key: "changeIssueColor", text: "Change issue color" },
    { key: "divider1", itemType: 2 },
    { key: "editSprint", text: "Edit sprint", disabled: true },
    { key: "editDates", text: "Edit dates" ,  onClick: () => {
        setIsEditModalOpen(true);
        setMenuTarget(null);
      },
    },
    { key: "removeDates", text: "Remove dates", disabled: true },
    { key: "editDependencies", text: "Edit dependencies" },
  ];

  return (
    <div
      className="epic-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     <div className="epic-item">
      {epic} 
    </div>

     
    {isHovered && (
        <div className="epic-actions">
          <IconButton 
            iconProps={{ iconName: "Add" }} 
            title="Add Story" 
            className="epic-button" 
          />
          <IconButton
            iconProps={{ iconName: "MoreVertical" }}
            title="Options"
            className="epic-button"
            onClick={(event) => setMenuTarget(event.currentTarget)}
          />
        </div>
      )}

    
      {menuTarget && (
        <ContextualMenu
          items={menuItems}
          target={menuTarget}
          onDismiss={() => setMenuTarget(null)}
        />
      )}
      
     
     {isEditModalOpen && (
        <EditDatesModal 
          isOpen={isEditModalOpen} 
          onClose={() => setIsEditModalOpen(false)} 
          epic={epic} 
        />
      )}

    </div>
  );
};

export default EpicItem;
