import React from 'react'

function ActionBtn({text, onClick}) {
    return (
        <button type="button" onClick={onClick}>{text}</button>
    )
}

export default ActionBtn
