import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import {MembersData} from '../data/MembersData';
import MarketCard from './MarketCard';
import {MarketData} from '../data/MarketData';

const Market = () => {
  return (
    <View style={styles.postContainer}>
      {MarketData.map(item => (
        <View key={item.id} style={styles.card}>
          <MarketCard cardInfo={item} />
          {/* <Image source={item.postImg} style={styles.postImg} /> */}
          {/* <PostFooter data={item} /> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    // backgroundColor: Colors.white,
    marginTop: 8,
  },
  card: {
    backgroundColor: Colors.white,
    marginBottom: 12,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  postImg: {
    width: '100%',
    height: 250,
  },
});

export default Market;
