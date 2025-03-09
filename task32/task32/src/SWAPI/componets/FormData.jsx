import React from 'react'
import InputSearch from "./InputSearch.jsx";

function FormData({ handleSubmit, query , handleChange }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="center" style={{justifyContent:"center",alignItems:"center", display: 'flex'}}>
                    <InputSearch handleChange={handleChange} query={query} handleSubmit = {handleSubmit}/>
                </div>
            </form>
        </>
    )
}

export default FormData
