import React from "react";

import classes from "./button.module.css";

//TODO: buttons animation
const Button = ({
  startIcon,
  icon,
  isChanged,
  title,
  endIcon,
  onClick,
  style,
  buttonClassName,
  type,
  isDisabled,
}) => {
  const classesForButton = {
    buttonStyleFlexible: classes.buttonStyleFlexible,
    buttonDefault: classes.buttonStyleDefault,
    disabled: isDisabled,
  };

  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      className={
        isDisabled
          ? `${classesForButton[buttonClassName]} ${classes.disabled}`
          : classesForButton[buttonClassName]
      }
    >
      {!isChanged ? (
        <div className={classes.buttonInside}>
          {!!startIcon ? (
            <div className={classes.buttonInside}>
              <div className={classes.startIcon}>{startIcon}</div>
              <span className={classes.buttonTitle}>{title}</span>
            </div>
          ) : (
            <span className={classes.buttonTitle}>{title}</span>
          )}
        </div>
      ) : (
        <div className={classes.buttonInside}>
          {!startIcon ? (
            <div>{icon}</div>
          ) : (
            <div
              className={
                !isChanged ? classes.startIcon : classes.startIconNoMargin
              }
            >
              {startIcon}
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
