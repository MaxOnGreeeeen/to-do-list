import React from "react";

import { Link } from "react-router-dom";

import { TextField, Button } from "@mui/material";

import HouseIcon from "@mui/icons-material/House";

import classes from "./Auth.module.css";
import IconsBlock from "../../../components/IconsBlock/IconsBlock";

const Auth = () => {
  const loginHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.authPage}>
      <div className={classes.authForm}>
        <div className={classes.titleBlock}>
          <h1 className={classes.title}>Вход</h1>
        </div>

        <form onSubmit={loginHandler}>
          <div className={classes.loginInput}>
            <label htmlFor="email">Email</label>
            <TextField
              fullWidth={true}
              size="small"
              type="login"
              color="secondary"
              margin="dense"
            />
          </div>

          <div className={classes.loginInput}>
            <label htmlFor="password">Password</label>
            <TextField
              fullWidth={true}
              size="small"
              type="password"
              color="secondary"
              margin="dense"
            />
          </div>

          <div className={classes.buttonsBlock}>
            <Button
              variant="contained"
              type="submit"
              size="small"
              fullWidth={true}
              startIcon={<HouseIcon />}
            >
              Войти
            </Button>
          </div>

          <div className={classes.registrationBlock}>
            <label>У вас ещё нет аккаута? </label>
            <Link to="/registration" className={classes.link}>
              Зарегистрироваться
            </Link>
          </div>
          <IconsBlock />
        </form>
      </div>
    </div>
  );
};

export default Auth;
