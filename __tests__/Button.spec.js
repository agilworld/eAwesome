import React from 'react';
import {render,fireEvent} from 'react-native-testing-library';
import Button from '../src/components/Button';

describe('Button Component', () => {
  it('clicking button', () => {
    const buttonHandler = jest.fn();
    const {queryByText, getByTestId} = render(<Button label="Button" onPress={buttonHandler}  />)
    expect(queryByText('Button')).not.toBeNull()
    fireEvent.press(getByTestId('reusedButton'))
  })
});