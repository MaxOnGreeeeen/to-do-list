import React from "react";

import { Input } from "../UI";

import { searchIcon } from "../../assets/images";

import classes from "./query.module.css";

const Query = () => {
  return (
    <div className={classes.querySearch}>
      <img className={classes.icon} src={searchIcon} />
      <Input className={"searchInput"} search={true} placeHolder={"Поиск"} />
    </div>
  );
};

export default Query;
