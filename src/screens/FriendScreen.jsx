import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import Member from '../components/Member';

const FriendScreen = () => {
  return (
    <ScrollView style={styles.homeContainer}>
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
  },
  title: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontWeight: '500',
  },
});

export default FriendScreen;
