import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../utils/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MarketCardModal from './MarketCardModal';

const MarketCard = ({cardInfo}) => {
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.postHeaderContainer}>
        <View style={styles.postTopSec}>
          <Image source={cardInfo.images} style={styles.postImg} />
          <View style={styles.userSection}>
            <Text style={styles.username}>{cardInfo?.name}</Text>

            <View style={styles.row}>
              <Text style={styles.days}>{cardInfo?.type}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.days}>{cardInfo?.subType}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.days}>{cardInfo?.address}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.days}>{cardInfo?.contact}</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.btn_view}
            onPress={() => setModalVisible(!modalVisible)}>
            <View>
              <Text style={styles.btnText_view}>View</Text>
            </View>
          </Pressable>
          <Pressable style={styles.btn_contact}>
            <View>
              <Text style={styles.btnText_contact}>Contact</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <MarketCardModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        cardInfo={cardInfo}
      />
    </>
  );
};

const styles = StyleSheet.create({
  postHeaderContainer: {
    // padding: 16,
    // borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  userProfile: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  postImg: {
    // width: 300,
    flex: 1,
    height: 250,
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
  column: {
    flexDirection: 'column',
  },
  postTopSec: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 16,
    color: Colors.textColor,
    marginBottom: 2,
  },
  userSection: {
    marginLeft: 12,
    paddingVertical: 10,
  },
  days: {
    fontSize: 14,
    color: Colors.textGrey,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  btn_view: {
    flex: 0.5,
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.white,
    borderTopWidth: 0.5,
    borderTopColor: Colors.primaryColor,
  },
  btnText_view: {
    fontSize: 18,
    color: Colors.primaryColor,
    padding: 8,
  },
  btn_contact: {
    flex: 0.5,
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.primaryColor,
  },
  btnText_contact: {
    fontSize: 18,
    color: Colors.white,
    padding: 8,
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

export default MarketCard;
