import React, {useState} from 'react';
import classes from "./Menu.module.css";
import AssignmentIcon from '@mui/icons-material/Assignment';
import Stack from "@mui/material/Stack";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import {Link} from "react-router-dom";

const Menu = (props) => {

    return (
        <div className={ props.active
            ? `${classes.menu} ${classes.active}`
            : classes.menu}
            style = {props.changeTop}>
            <Stack className = {classes.menuContent} direction="column" spacing={3}>

                    <div className={classes.flexContainer}>
                        <CircleNotificationsIcon style = {{fill: "red",marginRight: "10px"}}/>
                        <div className={classes.description}>
                            <Link className = {classes.linkItem} underline="none" to = "/about">
                                <span className={classes.fontSettings}>Входящие</span>
                            </Link>
                            <small  style ={{fontWeight: "lighter"}}>1</small>
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <AssignmentIcon style = {{fill: "red", marginRight: "10px"}}/>
                        <div className={classes.description}>
                            <Link className = {classes.linkItem} to = "/notes">
                                <span className={classes.fontSettings}>Заметки</span>
                            </Link>
                            <small style ={{fontWeight: "lighter"}}>10</small>
                        </div>
                    </div>

                    <div className={classes.flexContainer}>
                        <CoPresentIcon style = {{fill: "blue", marginRight: "10px"}}/>
                        <div className={classes.description }>
                            <Link className = {classes.linkItem} to = "/about">
                                <span className={classes.fontSettings}>О сайте</span>
                            </Link>
                            <small style ={{fontWeight: "lighter"}}></small>
                        </div>
                    </div>
            </Stack>
        </div>
    );
};

export default Menu;