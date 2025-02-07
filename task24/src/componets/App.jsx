import React from "react";
import {allInfo} from "./index.jsx";

function MainContent() {
    return <div className="form-floating">
        <div className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '700px'}}></div>
        <label htmlFor="floatingTextarea">
            <button className="btn btn-secondary" style={{margin: '5px'}}>people</button>
            <button className="btn btn-secondary" style={{margin: '5px'}}>1</button>
            <pre>
                {JSON.stringify(allInfo, null, 2)}
            </pre>
        </label>
        {/*{console.log(allInfo)}*/}
    </div>
}
function Search(){
    return <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">https://swapi.dev/api/</span>
            <input type="text" className="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-default" placeholder="people/1/"/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Get info</button>
        </div>
    </form>
}

export function ContainerOfTask(){
    return <div className='container'>
        <h1>SWAPI</h1>
        <Search/>
        <MainContent/>
    </div>
}
//{allInfo.map((elem, index) => (
//                     <li key = {index}>{JSON.stringify(elem)}</li>
//                 ))};

