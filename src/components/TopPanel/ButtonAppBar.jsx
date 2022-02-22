import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "../menu/Menu";

import {useEffect, useMemo, useRef, useState} from "react";
import {useWindowSize} from "../../customHooks/useWindowSize";

export default function ButtonAppBar(props) {

    const [width, height] = useWindowSize(() => {});
    const [changeTop, setChangeTop] = useState({});
    useEffect(() => {
        if (width >= 600){
            setChangeTop( {top : "64px"})
        }
        else if(width < 600 && width >= 500 ){
            setChangeTop({top : "48px"})
        }
        else setChangeTop({top : "56px"})
    }, [width])

    return (
        <div>
            <Box sx={{ flexGrow: 1}} {...props.style} width = "100vw">
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={props.changeActive}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Menu active = {props.active} changeTop = {changeTop}/>
        </div>

    );
}