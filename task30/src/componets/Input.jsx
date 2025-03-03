import React from 'react'

function Input({query, handleChange}) {
    return (
        <><input type="text" className="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-default" placeholder="people/1/" onChange={handleChange}
                 value={query}/></>
    )
}

export default Input
