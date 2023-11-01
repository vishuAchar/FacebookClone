import {View, Image, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import UserProfile from '../assets/images/post1.jpeg';
import {Colors} from '../utils/Colors';
import VectorIcon from '../utils/VectorIcon';
import verified from '../assets/images/verified_tick.png';

const MemberCard = ({data}) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.postTopSec}>
        <View style={styles.row}>
          <Image source={data.profileImg} style={styles.userProfile} />
          <View style={styles.userSection}>
            <Text style={styles.username}>
              {data?.name}
              {data?.isVerified && (
                <Image source={verified} style={styles.verified} />
              )}
            </Text>

            <View style={styles.row}>
              <Text style={styles.days}>{data?.dob}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.days}>{data?.bloodGroup}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.days}>{data?.address}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.days}>{data?.post}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <VectorIcon
            name={open ? 'chevron-small-up' : 'chevron-small-down'} //down | up |dots-three-horizontal
            type="Entypo"
            size={25}
            color={Colors.headerIconGrey}
            style={styles.headerIcons}
            onPress={() => setOpen(prev => !prev)}
          />
          <VectorIcon
            name="close"
            type="Ionicons"
            size={25}
            color={Colors.headerIconGrey}
          />
        </View>
      </View>
      {open && (
        <View style={styles.userSection}>
          <View style={styles.row}>
            <Text style={styles.days}>Phone: 987654321</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.days}>Occupation: Developer</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postHeaderContainer: {
    padding: 16,
  },
  userProfile: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  verified: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
  },
  postTopSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 2,
  },
  userSection: {
    marginLeft: 12,
  },
  days: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  dot: {
    fontSize: 14,
    color: Colors.textGrey,
    paddingHorizontal: 8,
  },
  userIcon: {
    marginTop: 3,
  },
  headerIcons: {
    marginRight: 20,
  },
  caption: {
    color: Colors.grey,
    fontSize: 15,
    marginTop: 10,
  },
});

export default MemberCard;
