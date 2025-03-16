import List from "../components/List/List.jsx";
import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("List Component", () => {
    it('should render the list then map massive', () => {
        const todo = ['task1', 'task2', 'task3'];
        const {getByText} = render(<List todo={todo}/>);

        expect(getByText(/task1/i)).toBeInTheDocument();
        expect(getByText(/task2/i)).toBeInTheDocument();
        expect(getByText(/task3/i)).toBeInTheDocument();
    });
})