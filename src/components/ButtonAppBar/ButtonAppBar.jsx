import React, { useEffect, useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useWindowSize } from "../../customHooks/useWindowSize";

import { Menu } from "../index.js";

export default function ButtonAppBar(props) {
  const [width, height] = useWindowSize(() => {});
  const [changeTop, setChangeTop] = useState({});

  useEffect(() => {
    if (width >= 600) {
      setChangeTop({ top: "64px" });
    } else if (width < 600 && width >= 500) {
      setChangeTop({ top: "48px" });
    } else setChangeTop({ top: "56px" });
  }, [width]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} {...props.style} width="100vw">
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
              ToDoNote
            </Typography>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Menu active={props.active} changeTop={changeTop} />
    </div>
  );
}
