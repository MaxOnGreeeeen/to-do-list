import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../../../redux/actions/authActions";

import { Alert, Button, Checkbox, TextField } from "@mui/material";

import HouseIcon from "@mui/icons-material/House";

import classes from "./Registration.module.css";

//TODO: создать страницу регистрации проработать логику возникновения уведомлений

const Registration = () => {
  const [checked, setChecked] = useState(true);

  const error = useSelector((state) => state.error);

  const [passwordConfirmed, setPasswordConfirmed] = useState(false);

  const [passwordsCompare, setPasswordCompare] = useState({
    password: "",
    passwordConf: "",
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(error.message);
  }, [error]);

  useEffect(() => {
    setMessage("");
  }, [checked]);

  const comparePasswords = () => {
    if (passwordsCompare.password === passwordsCompare.passwordConf) {
      setPasswordConfirmed(true);
    } else setPasswordConfirmed(false);
  };

  const dispatch = useDispatch();

  const registrationHandler = (e) => {
    e.preventDefault();

    comparePasswords();

    if (checked && passwordConfirmed) {
      dispatch(registerUser(form));
    }

    if (!checked) {
      setMessage("You need to confirm rules");
    }

    if (!passwordConfirmed) {
      setMessage("Password is not confirmed");
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleFormChange = (e) => {
    if (e.target.name !== "passwordConf") {
      setForm({ ...form, [e.target.name]: e.target.value });

      if (e.target.name === "password") {
        setPasswordCompare({ ...passwordsCompare, password: e.target.value });
      }
    }

    if (e.target.name === "passwordConf") {
      setPasswordCompare({ ...passwordsCompare, passwordConf: e.target.value });
    }
  };

  return (
    <div className={classes.registrationPage}>
      <div className={classes.registrationForm}>
        <div className={classes.titleBlock}>
          <h1 className={classes.title}>Регистрация</h1>
        </div>

        <form onSubmit={registrationHandler}>
          <div className={classes.inputParam}>
            <TextField
              name="firstName"
              onChange={handleFormChange}
              label="first name"
              fullWidth={true}
              size="small"
              color="secondary"
              margin="dense"
            />
          </div>
          <div className={classes.inputParam}>
            <TextField
              name="lastName"
              onChange={handleFormChange}
              label="last name"
              fullWidth={true}
              size="small"
              color="secondary"
              margin="dense"
            />
          </div>

          <div className={classes.inputParam}>
            <label htmlFor="email">Email</label>
            <TextField
              name="email"
              onChange={handleFormChange}
              fullWidth={true}
              size="small"
              color="secondary"
              margin="dense"
            />
          </div>

          <div className={classes.inputParam}>
            <label htmlFor="password">Password</label>
            <TextField
              name="password"
              onChange={handleFormChange}
              fullWidth={true}
              size="small"
              type="password"
              color="secondary"
              margin="dense"
            />
          </div>

          <div className={classes.inputParam}>
            <label htmlFor="password">Confirm password</label>
            <TextField
              name="passwordConf"
              onChange={handleFormChange}
              fullWidth={true}
              size="small"
              type="password"
              color="secondary"
              margin="dense"
            />
          </div>
          {message !== "" && message !== undefined ? (
            <Alert severity="error">{message}</Alert>
          ) : (
            <div></div>
          )}
          <div className={classes.checkBoxBlock}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>
              Я соглашаюсь с правилами использования сайта а также принимаю
              правила пользования сайтом
            </span>
          </div>

          <Button
            onClick={registrationHandler}
            variant="contained"
            type="submit"
            size="small"
            fullWidth={true}
            startIcon={<HouseIcon />}
          >
            confirm registration
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
