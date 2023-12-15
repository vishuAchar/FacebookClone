// DateField.js

import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Button,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const DateField = ({value, placeholder, onChange, selectedDate}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    onChange(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const createDateFormat = date => {
    let dateString;
    if (date) {
      dateString = date?.toLocaleDateString();
    }

    return dateString;
  };

  useEffect(() => {
    if (value) {
      setDate(value);
    }
  }, [value]);
  console.log({value});
  return (
    <SafeAreaView style={styles.inputContainer}>
      <Pressable style={styles.button} onPress={showDatepicker}>
        <Text>{value ? createDateFormat(date) : placeholder}</Text>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onDateChange}
        />
      )}
    </SafeAreaView>
  );
};

export default DateField;
const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focused: {
    borderColor: 'blue',
  },
  button: {
    backgroundColor: 'white',
    color: 'red',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});
