// CustomInput.js

import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {inputTypeEnum} from '../CommonEnum';

const TextInputField = ({type, placeholder, onChange, value}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const keyBoardType =
    type === inputTypeEnum.NUMBER || type === inputTypeEnum.PHONE
      ? 'numeric'
      : 'default';

  return (
    <TextInput
      keyboardType={keyBoardType}
      style={isFocused ? styles.focused : styles.input}
      placeholderTextColor="red"
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={onChange}
      value={value}
      autoCorrect={false}
      multiline={type === inputTypeEnum.TEXT_AREA ? true : false}
    />
  );
};

const styles = StyleSheet.create({
  focused: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  error: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  input: {
    fontSize: 13,
  },
});

export default TextInputField;
