import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';

const FilterSearchComponent = ({data, renderItem}) => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item => {
    if (filter && item.name.includes(filter)) {
      return true;
    }
    if (item.name.includes(search)) {
      return true;
    }
    return false;
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <VectorIcon
          name="search1" //down | up |dots-three-horizontal
          type="AntDesign"
          size={20}
          color={Colors.headerIconGrey}
          style={styles.headerIcons}
        />
      </View>
      <View style={styles.inputContainer}>
        <VectorIcon
          name="filter" //down | up |dots-three-horizontal
          type="AntDesign"
          size={20}
          color={Colors.headerIconGrey}
          style={styles.filterIcon}
        />
      </View>
      <View style={styles.inputContainer}>
        <VectorIcon
          name="barschart" //down | up |dots-three-horizontal
          type="AntDesign"
          size={20}
          color={Colors.headerIconGrey}
          style={styles.filterIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    width: 240,
    padding: 8,
    color: Colors.black,
  },
  searchIcon: {
    padding: 8,
    color: 'gray',
  },
  clearButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  headerIcons: {
    marginRight: 20,
  },
  filterIcon: {
    marginHorizontal: 10,
  },
});

export default FilterSearchComponent;
