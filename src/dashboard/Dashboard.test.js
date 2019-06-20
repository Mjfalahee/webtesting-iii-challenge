// Test away
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';


import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it ('Renders Display and Controls, and matches snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})