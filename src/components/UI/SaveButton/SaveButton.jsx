import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function SaveButton({...props}){
    return(
        <Button {...props}variant="contained" endIcon={<SendIcon />}>Create</Button>
    );
};
export default SaveButton;