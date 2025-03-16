import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../components/Input/Input.jsx';


describe('Input', () => {
    it('renders correctly input and btn', () => {
        const mockSetTodo = jest.fn();
        const {getByRole , getByText } = render(
            <Input todo={[]} setTodo={mockSetTodo} />);

        const input = getByRole('textbox');
        const btn = getByText(/add/i);

        expect(input).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    });
    it('renders correctly', () => {
        const mockSetTodo = jest.fn();
        const {getByRole , getByText } = render(
            <Input todo={[]} setTodo={mockSetTodo} />);

        const input = getByRole('textbox');
        const btn = getByText(/add/i);

        fireEvent.change(input, { target: { value: 'add' } });
        fireEvent.click(btn);

        expect(mockSetTodo).toHaveBeenCalledWith(['add'])
    });

})