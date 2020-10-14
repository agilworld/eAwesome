import React from 'react';
import {render,fireEvent} from 'react-native-testing-library';
import Button from '../src/components/Button';

describe('<Button />', () => {
    describe('Good case - Pass some props', () => {
        const props = {
            label:'Sign In',
            variant:'contained',
            onPress:() => {}
        }
        it('should render correctly', () => {
            const wrapper = render(<Button {...props} />)
            expect(wrapper.toJSON()).toMatchSnapshot()
        })
    })

    describe('Bad case - Not pass any props', () => {
        it('should render correctly', () => {
            const wrapper = render(<Button />)
            expect(wrapper.toJSON()).toMatchSnapshot()
        })
    })
 
});