import React from "react";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ ...props }) => {
  return (
    <IconButton
      {...props}
      aria-label="delete"
      size="big"
      style={{ background: "#1876d2" }}
    >
      <CloseIcon style={{ fill: "white" }} />
    </IconButton>
  );
};
export default CloseButton;
