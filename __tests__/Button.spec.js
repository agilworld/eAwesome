import React from 'react';
import {render,fireEvent} from 'react-native-testing-library';
import Button from '../src/components/Button';

describe('<Button />', () => {
    
    describe('test label & press', () => {
        it('should render correctly', () => {
            const buttonHandler = jest.fn();
            const {queryByText, getByTestId} = render(<Button label="Button" onPress={buttonHandler}/>)
            expect(queryByText('Button')).not.toBeNull()
            fireEvent.press(getByTestId('reusedButton'))
        })
    })

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

        it('passing test label', () => {
            const {queryByText} = render(<Button label="Sign Out"/>)
            expect(queryByText('Sign Out')).toBeTruthy()
        })

        it('passing onpress button', () => {
            const buttonHandler = jest.fn()
            const {getByTestId} = render(<Button onPress={buttonHandler} />)

            fireEvent.press(getByTestId('reusedButton'))
        })
    })

    describe('Bad case - No pass any props', () => {
        it('should render correctly', () => {
            const wrapper = render(<Button />)
            expect(wrapper.toJSON()).toMatchSnapshot()
        })

        it('will show label Button', () => {
            const {queryByText} = render(<Button />)
            expect(queryByText('Button')).toBeTruthy()
        })

    })
});