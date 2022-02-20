import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';

const MultiLineTextarea = ({...props}) => {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <TextField {...props}
                sx = {{width : "100%"}}
                id="filled-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="filled"
            />
        </div>
    );
};
export default MultiLineTextarea;