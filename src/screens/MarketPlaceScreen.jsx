import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import Member from '../components/Member';
import FilterSearchComponent from '../components/FilterSearchComponent';
import Market from '../components/Market';
const data = [
  {id: '1', name: 'Item 1'},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
  // Add more items here
];
const MarketPlaceScreen = () => {
  return (
    <View style={styles.container}>
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
      <ScrollView style={styles.homeContainer}>
        <Market />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    height: '100%',
  },
  filterContainer: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  homeContainer: {
    backgroundColor: Colors.background,
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontWeight: '500',
  },
});

export default MarketPlaceScreen;
