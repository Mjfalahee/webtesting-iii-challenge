import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';


describe('<Controls />', () => {

   describe('renders a open/close and a lock/unlock button', () => {
       it('renders the buttons', () => {
           const { getByTestId } = render(<Controls />);
           getByTestId('lockUnlock');
           getByTestId('openClose');
       })
       it('changes the text of the buttons when passed locked and closed', () => {
           const { getByTestId } = render(<Controls locked={true} closed={true} />);
           const lockButton = getByTestId('lockUnlock');
           const openButton = getByTestId('openClose');

           expect(lockButton).toHaveTextContent('Unlock Gate');
           expect(openButton).toHaveTextContent('Open Gate');
       })
   })

   describe('renders buttons inversely disabled according to props', () => {
        it('Disables openClose when the gate is locked', () => {
            const { getByTestId } = render(<Controls locked={true} closed={true}/>);
            const openButton = getByTestId('openClose');
            expect(openButton).toHaveAttribute('disabled');
        })
        it('Disables lockUnlock when the gate is open', () => {
            const { getByTestId } = render(<Controls locked={false} closed={false} />);
            const lockButton = getByTestId('lockUnlock');
            expect(lockButton).toHaveAttribute('disabled');
        })
   })
})