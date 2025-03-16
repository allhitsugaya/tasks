import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionBtn from '../components/ActionBtn/ActionBtn.jsx';

describe('ActionBtn', () => {
    beforeAll(() => {
        console.log('beforeAll');
    });

    it('should render the button with the correct text', () => {
        const { getByText } = render(<ActionBtn text="clear" onClick={() => {}} />);
        const btn = getByText(/clear/i);
        expect(btn).toBeInTheDocument();
    });

    it('should call the onClick handler', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<ActionBtn text="clear" onClick={handleClick} />);
        const btn = getByText(/clear/i);

        fireEvent.click(btn);
        expect(handleClick).toBeCalled();
    });

    afterAll(() => {
        console.log('afterAll');
    });
});