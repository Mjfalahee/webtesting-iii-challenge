import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

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
    it('displays closed if the closed prop is true', () => {
        const { getByTestId } = render(<Display closed={true} />);
        const open = getByTestId('openClose');
        expect(open).toHaveTextContent(/closed/i);
    })
    it('displays locked if the locked prop is true', () => {
        const { getByTestId } = render(<Display locked={true} />);
        const lock = getByTestId('lockUnlock');
        expect(lock).toHaveTextContent(/locked/i);
    })

    it('uses the red-led class when the gate is locked and closed', () => {
        const { getByTestId } = render(<Display locked={true} closed={true} />);
        const lock = getByTestId('lockUnlock');
        const open = getByTestId('openClose');
        expect(lock).toHaveClass('red-led');
        expect(open).toHaveClass('red-led');
    })
    it('uses the green-led class when the gate is unlocked and open', () => {
        const { getByTestId } = render(<Display locked={false} closed={false} />);
        const lock = getByTestId('lockUnlock');
        const open = getByTestId('openClose');
        expect(lock).toHaveClass('green-led');
        expect(open).toHaveClass('green-led');
    })
})