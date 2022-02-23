import React from "react";

import Button from "@mui/material/Button";

import EditIcon from "@mui/icons-material/Edit";

function ChangeContentButton({ ...props }) {
  return (
    <Button {...props} variant="contained" endIcon={<EditIcon />}>
      Edit
    </Button>
  );
}
export default ChangeContentButton;
