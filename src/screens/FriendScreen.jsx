import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import Member from '../components/Member';
import FilterSearchComponent from '../components/FilterSearchComponent';
const data = [
  {id: '1', name: 'Item 1'},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
  // Add more items here
];
const FriendScreen = () => {
  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.filterContainer}>
        <FilterSearchComponent
          data={data}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <Member />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },

  filterContainer: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontWeight: '500',
  },
});

export default FriendScreen;
