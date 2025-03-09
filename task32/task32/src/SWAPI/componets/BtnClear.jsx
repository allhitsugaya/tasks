import React from 'react'
import Button from "@mui/material/Button";

function BtnClear({clearAll}) {
    return (
        <Button type='button' className='btn btn-warning' onClick={clearAll}>Clear All</Button>
    )
}

export default BtnClear
