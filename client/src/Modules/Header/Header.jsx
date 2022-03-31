import React, { useDebugValue, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Menu, AccountInfo, Query } from "../../components";

import { logOutUser } from "../../redux/actions/authActions";

import { Button, IconButton } from "../../components/UI";

import { burgerMenu, homeIcon } from "../../assets/images";

import classes from "./header.module.css";

const Header = (props) => {
  const account = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <header className={classes.headerContainer}>
      <Menu active={props.isActive} />

      <div className={classes.headerContent}>
        <div className={classes.iconsBlock}>
          <IconButton
            disabled={false}
            style={{
              marginRight: "10px",
            }}
            className={"iconOnly"}
            icon={burgerMenu}
          />
          <IconButton
            disabled={false}
            style={{
              marginRight: "10px",
            }}
            className={"iconOnly"}
            icon={homeIcon}
          />
          <Query />
        </div>
        <div className={classes.accountBlock}>
          <AccountInfo account={account.user} />

          <div className={classes.buttonsBlock}>
            <Button
              title={"Выйти"}
              buttonClassName={"buttonDefault"}
              onClick={handleLogout}
              style={{
                background: "none",
                padding: 0,
                fontSize: "15px",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
