import React from 'react'
import TodoPage from './TODO/TodoPage.jsx'
import {ContainerOfTask} from "./SWAPI/componets/App.jsx";
import {ErrorBoundaries} from "./ErrorBoundaries/ErrorBoundaries.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/index.jsx";
import CV from "./CV/CV.jsx";


function App() {
    return (
        <ErrorBoundaries>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<CV />} />
                    <Route path="todolist" element={<TodoPage />} />
                    <Route path="swapi" element={<ContainerOfTask />} />
                </Route>
            </Routes>
        </ErrorBoundaries>
    )

}

export default App
