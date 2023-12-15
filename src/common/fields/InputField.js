// CustomInput.js

import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {inputTypeEnum} from '../CommonEnum';
import TextInputField from './TextInputField';
import DateField from './DateField';
import DropdownField from './DropdownField';

const InputField = ({type, placeholder, onChange, value, list}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.inputContainer}>
      {(type === inputTypeEnum.TEXT ||
        type === inputTypeEnum.NUMBER ||
        type === inputTypeEnum.TEXT_AREA) && (
        <TextInputField
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
      {type === inputTypeEnum.DATE && (
        <DateField onChange={onChange} value={value} />
      )}
      {type === inputTypeEnum.DROP_DOWN && (
        <DropdownField
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          list={list}
        />
      )}
      {type === inputTypeEnum.FIELD_HEADER && (
        <TextInput
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          value={value}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
  },
  focused: {
    borderColor: 'blue',
  },
  input: {
    fontSize: 1,
    paddingHorizontal: 8,
  },
});

export default InputField;
