import React from 'react';
import ReactDOM from 'react-dom/client';

const allInfo = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    }
]

export function TextArea() {
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

//{allInfo.map((elem, index) => (
//                     <li key = {index}>{JSON.stringify(elem)}</li>
//                 ))};

