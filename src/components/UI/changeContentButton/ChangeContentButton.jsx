import React from 'react'
import Button from '@mui/material/Button';
import ChangeCircle from '@mui/icons-material/ChangeCircle'

function ChangeContentButton({...props}){
    return(
        <Button {...props}variant="contained" endIcon={<ChangeCircle/>}>Change</Button>
    );
};
export default ChangeContentButton;