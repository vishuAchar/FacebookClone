import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import {MembersData} from '../data/MembersData';
import MemberCard from './MemberCard';

const Member = () => {
  return (
    <View style={styles.postContainer}>
      {MembersData.map(item => (
        <View key={item.id} style={styles.card}>
          <MemberCard data={item} />
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
    marginBottom: 8,
    borderRadius: 10,
  },
  postImg: {
    width: '100%',
    height: 250,
  },
});

export default Member;
