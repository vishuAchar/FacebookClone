// Dropdown.js

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import VectorIcon from '../../utils/VectorIcon';

const DropdownField = ({value, onChange, placeholder}) => {
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Pear', value: 'pear'},
  ]);

  return (
    <View style={{flex: 1, position: 'absolute', zIndex: 100}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={value => onChange(value)}
          setItems={setItems}
          placeholder={'Choose a fruit.'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  customInput_select_container: {
    height: 48,
    backgroundColor: '#F2F4FF',
    borderRadius: 8,
    borderColor: '#1E48FF',
    borderWidth: 1.5,
    fontSize: 14,
    zIndex: 100,
  },
  customInput_dropDown_container: {
    width: '100%',
    borderColor: '#D7E9F4',
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: 'white',
    zIndex: 1000,
    elevation: 1000,
  },
  customInput_select_bottomView: {
    // height: data?.length > 4 ? 160 : data?.length * 40,
    maxHeight: 160,
  },
  customInput_list_style: {
    width: '100%',
    borderColor: '#D7E9F4',
    borderRadius: 8,
    marginTop: 5,
    backgroundColor: 'white',
    zIndex: 1000,
    elevation: 1000,
  },
});

export default DropdownField;
