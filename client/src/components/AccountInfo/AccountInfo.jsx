import React from "react";

import { iconNotFound } from "../../assets/images";

import classes from "./accountInfo.module.css";

const AccountInfo = ({ accountPhoto, account }) => {
  return (
    <div className={classes.accountBlock}>
      <div className={classes.accountInformation}>
        <span className={classes.accountName}>{account.firstName}</span>
        <span className={classes.accountName}>{account.lastName}</span>
      </div>
      <div className={classes.photoContainer}>
        {accountPhoto ? (
          <img src={accountPhoto} className={classes.accountPhoto} />
        ) : (
          <img className={classes.accountPhoto} src={iconNotFound} />
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
