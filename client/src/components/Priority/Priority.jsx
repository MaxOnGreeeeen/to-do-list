import React from "react";

import FlagIcon from "@mui/icons-material/Flag";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import classes from "./priority.module.css";

const Priority = ({
  handleChange,
  value,
  active,
  handleClickActive,
  handleClose,
}) => {
  const values = [
    { priority: "низкий", value: 25, color: "disabled" },
    { priority: "средний", value: "50", color: "primary" },
    { priority: "высокий", value: "75", color: "success" },
    { priority: "очень высокий", value: "100", color: "error" },
  ];

  return (
    <div
      className={classes.selectClass}
      id="demo-controlled-open-select"
      value={value}
      onChange={handleChange}
    >
      <div className={classes.dropdownButton} onClick={handleClickActive}>
        {value}
        <ArrowDropDownIcon />
      </div>
      <div
        className={
          !active
            ? `${classes.backOfWindow} ${classes.active} `
            : classes.backOfWindow
        }
        onClick={handleClose}
      />
      <div
        className={
          active
            ? `${classes.dropdownContent} ${classes.active}`
            : classes.dropdownContent
        }
      >
        {values.map((item, key) => {
          return (
            <div
              className={classes.dropdownContentItem}
              onClick={handleChange}
              key={item.value}
            >
              <FlagIcon
                style={{ marginRight: "10px", pointerEvents: "none" }}
                color={item.color}
              />
              {item.priority}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Priority;
