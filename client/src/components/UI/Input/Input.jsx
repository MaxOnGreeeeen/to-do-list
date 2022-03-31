import React from "react";

import classes from "./input.module.css";

const Input = ({
  search,
  className,
  placeHolder,
  style,
  value,
  onChange,
  type,
}) => {
  const classesInput = {
    searchInput: classes.searchInput,
    multilineInput: classes.multilineInput,
    defaultInput: classes.inputField,
  };
  if (className === "searchInput") {
    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        className={`${classes.inputField} ${classesInput[className]}`}
      />
    );
  }
  if (className === "multilineInput") {
    return (
      <textarea
        className={classes.multilineInput}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    );
  }

  if (className === "defaultInput") {
    return (
      <input
        value={value}
        className={classes.inputField}
        onChange={onChange}
        placeholder={placeHolder}
      />
    );
  }
};

export default Input;
