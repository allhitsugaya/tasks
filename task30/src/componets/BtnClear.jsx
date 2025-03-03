import React from 'react'

function BtnClear({clearAll}) {
    return (
        <button type='button' className='btn btn-warning' onClick={clearAll}>Clear All</button>
    )
}

export default BtnClear
