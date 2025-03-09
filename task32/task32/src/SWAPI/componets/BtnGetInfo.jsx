import React from 'react'
import Button from "@mui/material/Button";

function BtnGetInfo({handleSubmit}) {
    return (
        <Button value="soft" onClick={handleSubmit}>Get info</Button>
    )
}

export default BtnGetInfo
