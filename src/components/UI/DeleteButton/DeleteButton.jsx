import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

function DeleteButton({ ...props }) {
  return (
    <Button {...props} variant="outlined" startIcon={<DeleteIcon />}>
      Delete
    </Button>
  );
}
export default DeleteButton;
