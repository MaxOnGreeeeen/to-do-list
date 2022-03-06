import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { TextField, Button, AlertTitle, Alert } from "@mui/material";

import HouseIcon from "@mui/icons-material/House";

import classes from "./Auth.module.css";

import IconsBlock from "../../../components/IconsBlock/IconsBlock";

import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../../redux/actions/authActions";

const Auth = () => {
  const errorMessage = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    setMessage(errorMessage.error.message);

    setForm({ ...form, password: "" });
  }, [errorMessage]);

  const [message, setMessage] = useState("");

  const [form, setForm] = useState({ email: "", password: "" });

  const onEmailHandler = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const onPasswordHandler = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const loginHandle = (e) => {
    e.preventDefault();

    dispatch(loginUser(form));
  };

  return (
    <div className={classes.authPage}>
      <div className={classes.authForm}>
        <div className={classes.titleBlock}>
          <h1 className={classes.title}>Вход</h1>
        </div>

        <form onSubmit={loginHandle}>
          <div className={classes.loginInput}>
            <label htmlFor="email">Email</label>
            <TextField
              onChange={onEmailHandler}
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
              onChange={onPasswordHandler}
              fullWidth={true}
              size="small"
              type="password"
              color="secondary"
              margin="dense"
            />
          </div>

          {message !== "" && message !== undefined ? (
            <Alert variant="outlined" severity="error">
              An error occurred — <strong>{message}</strong>
            </Alert>
          ) : (
            <div></div>
          )}

          <div className={classes.buttonsBlock}>
            <Button
              onClick={loginHandle}
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
