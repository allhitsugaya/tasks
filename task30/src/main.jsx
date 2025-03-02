import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import { ContainerOfTask } from "./componets/App.jsx";
import  './styles/App.css';
import {Provider} from "react-redux";
import {store} from "./slices/store.js";


const container = document.getElementById('root')

if (container) {
    const root = createRoot(container)

    root.render(
        <Provider store={store}>
            <ContainerOfTask />
        </Provider>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}
