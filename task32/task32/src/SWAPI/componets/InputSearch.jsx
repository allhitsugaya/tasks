import * as React from 'react';
import Input from '@mui/joy/Input';
import BtnGetInfo from "./BtnGetInfo.jsx";
import {Box} from "@mui/joy";
import Textarea from '@mui/joy/Textarea';

function InputSearch({query, handleChange, handleSubmit}) {
    return (<Box style={{ display: 'flex', alignItems: 'center' }}>
            <Input variant="outlined" disabled placeholder="https://swapi.dev/api/"/>
            <Input placeholder="people/1/" onChange={handleChange}
                   value={query} variant="outlined"/>
            <BtnGetInfo handleSubmit={handleSubmit}/>
        </Box>

    )
}

export default InputSearch
