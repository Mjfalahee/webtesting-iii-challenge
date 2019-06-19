// Test away!

import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

//gate
//cannot be closed or opened if it is locked

//display
//displays if gate is open/closed and if it is locked/unlocked
//displays 'closed' if the closed prop is true, and open otherwise
//display 'locked' if the locked prop is true, and unlocked otherwise
//when locked or closed, uses the red-led class
//when unlocked or open use the green-led class


describe('<Display />', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Display />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('defaults to unlocked and open', () => {
        const { getByText } = render(<Display />);
        getByText(/unlocked/i);
        getByText(/open/i);
    })
    it('cannot be closed if it is locked', () => {
        const { getByTestId } = render(<Display locked={true} />);
        const open = getByTestId('openClose');
        
    })
    
    it('cannot be opened if it is locked', () => {

    })
})