import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import logo from '../assets/images/vym_logo.png';
import add_image from '../assets/images/add-icon.png';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowCenter}>
        <Image source={logo} style={styles.fbLogoStyle} />
        <Text style={styles.logoText}>V Y M</Text>
      </View>
      <View style={styles.headerIcons}>
        <Image source={add_image} style={styles.fbLogoStyle} />
        {/* <View style={styles.ProfileBg}>
          <VectorIcon
            name="user"
            type="FontAwesome5"
            size={20}
            color={Colors.white}
          />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fbLogoStyle: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  logoText: {color: Colors.primaryColor, fontSize: 20, fontWeight: '900'},
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  postBg: {
    backgroundColor: Colors.primaryColor,
    height: 35,
    // width: 5,
    paddingHorizontal: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    color: 'white',
  },
  ProfileBg: {
    backgroundColor: Colors.primaryColor,
    height: 35,
    width: 35,
    paddingHorizontal: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  container: {
    backgroundColor: Colors.white,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
});

export default Header;
