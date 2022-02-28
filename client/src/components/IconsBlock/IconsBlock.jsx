import React from 'react';

import {Icon} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";

import YouTubeIcon from "@mui/icons-material/YouTube";

import GoogleIcon from "@mui/icons-material/Google";

import GitHubIcon from '@mui/icons-material/GitHub';

import classes from "./IconsBlock.module.css";

const IconsBlock = () => {
    return (
        <div className={classes.socials}>

            <div className={classes.titleBlock}>
                <span>Наши социальные сети</span>
            </div>

            <hr/>

            <div className={classes.socialsIcons}>
                <a href = "https://www.instagram.com/max_on_green_/">
                    <Icon color="primary"  className={classes.iconStyle}>
                        <InstagramIcon />
                    </Icon>
                </a>

                <a href = "https://www.youtube.com/channel/UCbNRZ85FUf8C3adxOd2XGeQ">
                    <Icon color="primary" className={classes.iconStyle}>
                        <YouTubeIcon/>
                    </Icon>
                </a>

                <a href = "https://github.com/MaxOnGreeeeen">
                    <Icon color="primary"  className={classes.iconStyle}>
                        <GitHubIcon/>
                    </Icon>
                </a>

                <a href = "https://vk.com/dharmainitiative4815162342boyatb">
                    <Icon color="primary"  className={classes.iconStyle} >
                        <img src="https://img.icons8.com/color/25/000000/vk-com.png"/>
                    </Icon>
                </a>

            </div>

        </div>
    );
};

export default IconsBlock;