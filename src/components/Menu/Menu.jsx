import React from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
import {
  Assessment,
  CircleNotifications,
  CoPresent,
} from "@mui/icons-material";

import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div
      className={
        props.active ? `${classes.menu} ${classes.active}` : classes.menu
      }
      style={props.changeTop}
    >
      <Stack className={classes.menuContent} direction="column" spacing={3}>
        <div className={classes.flexContainer}>
          <CircleNotifications style={{ fill: "red", marginRight: "10px" }} />
          <div className={classes.description}>
            <Link className={classes.linkItem} underline="none" to="/about">
              <span className={classes.fontSettings}>Входящие</span>
            </Link>
            <small style={{ fontWeight: "lighter" }}>1</small>
          </div>
        </div>

        <div className={classes.flexContainer}>
          <Assessment style={{ fill: "red", marginRight: "10px" }} />

          <div className={classes.description}>
            <Link className={classes.linkItem} to="/notes">
              <span className={classes.fontSettings}>Заметки</span>
            </Link>

            <small style={{ fontWeight: "lighter" }}>10</small>
          </div>
        </div>

        <div className={classes.flexContainer}>
          <CoPresent style={{ fill: "blue", marginRight: "10px" }} />

          <div className={classes.description}>
            <Link className={classes.linkItem} to="/about">
              <span className={classes.fontSettings}>О сайте</span>
            </Link>

            <small style={{ fontWeight: "lighter" }}></small>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Menu;
