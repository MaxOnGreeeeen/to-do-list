import React from "react";

import classes from "./iconButton.module.css";

const IconButton = ({
  icon,
  style,
  disabled,
  onClick,
  iconDisabled,
  className,
}) => {
  const buttonClasses = {
    iconOnly: classes.iconOnly,
    defaultIcon: classes.buttonStyle,
  };
  return (
    <button
      style={style}
      onClick={onClick}
      className={
        !disabled
          ? buttonClasses[className]
          : buttonClasses[className] + " " + classes.disabled
      }
    >
      <img src={!disabled ? icon : iconDisabled} />
    </button>
  );
};

export default IconButton;
