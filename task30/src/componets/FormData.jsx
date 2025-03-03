import React from 'react'
import Input from "./Input.jsx";

function FormData({ handleSubmit, query , handleChange }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">https://swapi.dev/api/</span>
                    <Input handleChange={handleChange} query={query}/>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Get info</button>
                </div>
            </form>
        </>
    )
}

export default FormData
