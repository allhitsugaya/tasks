import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../components/Form/Form.jsx'

describe('Form', () => {
    beforeAll(() => {
        console.log('beforeAll');
    });

    it('should render the button, h2', () => {
        const mockSetTodo = jest.fn();
        const {getByText} = render(<Form setTodo={mockSetTodo} todo={[]}/>);
        const btn = getByText(/ClearAll/i);
        const h2 = getByText(/todolist with jest/i);

        expect(h2).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    });
    afterAll(() => {
        console.log('afterAll');
    });
});