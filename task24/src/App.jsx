import React from 'react';
import ReactDOM from 'react-dom/client';
import {TextArea} from "./index.jsx";
import  './App.css';

function H1Element(){
    return <div className='container'>
        <h1>SWAPI</h1>
        <InputElement />
        <TextArea></TextArea>
    </div> ;
}

function InputElement(){
    return <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">https://swapi.dev/api/</span>
        <input type="text" className="form-control" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" placeholder="people/1/"/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Get info</button>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< H1Element />);
