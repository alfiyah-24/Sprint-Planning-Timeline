import React from "react";
import "./HeaderRow.css"; 

const HeaderRow = ({ leftHeader, rightHeader }) => {
  return (
    <div className="header-row" role="row">
      <div className="left-header" role="columnheader">
        {leftHeader}
      </div>
      <div className="right-header" role="columnheader">
        {rightHeader}
      </div>
    </div>
  );
};


export default HeaderRow;
