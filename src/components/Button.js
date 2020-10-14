import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 0,
  },
  buttonPlain:{
    paddingRight:10
  },
  buttonContained: {
    height: 40,
    backgroundColor:"#E04081",
    color:'#fff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  textPlain:{
    color:'#333'
  },   
  textContained:{
      color:'#fff'
  }
});

const Button = props => {
  const {
    label,
    onPress,
    variant,
    ...restProps
  } = props

  let buttonStyle, textStyle
  let text = (label == undefined) ? 'Button' : label
  if( variant == 'contained' ) {
    buttonStyle = styles.buttonContained
    textStyle = styles.textContained
  } else {
    buttonStyle = styles.buttonPlain
    textStyle = styles.textPlain
  }

  return (
    <TouchableHighlight 
        testID={"reusedButton"}
        style={buttonStyle}
        underlayColor={'#fefefe'}
        onPress={onPress}
        {...restProps}
    >
        <Text style={textStyle}>{text}</Text>
    </TouchableHighlight>
  );
};

export default Button;
