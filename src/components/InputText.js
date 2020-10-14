import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 0,
  },
  inputText:{
    height: 40, 
    padding:12,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom:10
  },
  disabled: {
    backgroundColor: '#eeeeee',
    borderBottomWidth: 0,
  }
});

const InputText = props => {
  const {
    label,
    placeholder,
    style,
    isSecure,
    onChange,
    ...restProps
  } = props;

  let disabledStyle = {};

  if (restProps.editable === false) {
    disabledStyle = styles.disabled;
  }


  return (
    <View
      style={{
        marginBottom: 10,
        width:'100%'
      }}>
      <TextInput
        secureTextEntry={isSecure}
        placeholder={placeholder}
        onChangeText={text => onChange(text)}
        value={props.text}
        style={[styles.inputText, style, disabledStyle]}
        {...restProps}
      />
    </View>
  );
};

export default InputText;
