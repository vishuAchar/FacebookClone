import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
9;
import {Colors} from '../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library you prefer

const MarketCardModal = ({modalVisible, setModalVisible, cardInfo}) => {
  const openLocation = () => {
    if (cardInfo?.googleMapLink) {
      Linking.openURL(cardInfo.googleMapLink);
    }
  };

  return (
    <>
      {modalVisible && (
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'rgba(47, 47, 47, 0.1)'}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={cardInfo.images} style={styles.postImg} />
            <Text style={styles.businessName}>{cardInfo?.name}</Text>
            <Text style={styles.description}>{cardInfo?.about}</Text>
            <View
              style={{
                justifyContent: 'flex-start',
                width: '100%',
                paddingHorizontal: 20,
              }}>
              <View style={styles.detailsContainer}>
                <Icon
                  name="user"
                  size={20}
                  color={Colors.primaryColor}
                  style={styles.icon}
                />
                <Text style={styles.detailsText}>{cardInfo?.owner}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Icon
                  name="briefcase"
                  size={20}
                  color={Colors.primaryColor}
                  style={styles.icon}
                />
                <Text style={styles.detailsText}>{cardInfo?.type}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Icon
                  name="globe"
                  size={20}
                  color={Colors.primaryColor}
                  style={styles.icon}
                />
                <TouchableOpacity
                  onPress={() => Linking.openURL(cardInfo.website)}>
                  <Text style={[styles.detailsText, styles.linkText]}>
                    {cardInfo?.website}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailsContainer}>
                <Icon
                  name="phone"
                  size={20}
                  color={Colors.primaryColor}
                  style={styles.icon}
                />
                <Text style={styles.detailsText}>{cardInfo?.contact}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Icon
                  name="envelope"
                  size={20}
                  color={Colors.primaryColor}
                  style={styles.icon}
                />
                <Text style={styles.detailsText}>
                  {cardInfo?.email || 'abc@gmail.com'}
                </Text>
              </View>
              <View style={styles.detailsContainer}>
                <Icon
                  name="map-marker"
                  size={20}
                  color={Colors.primaryColor}
                  style={styles.icon}
                />
                <TouchableOpacity onPress={openLocation}>
                  <Text style={[styles.detailsText, styles.linkText]}>
                    {cardInfo?.address}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              <TouchableOpacity
                onPress={openLocation}
                style={styles.closeButton}>
                <Text style={styles.closeButtonText}>View in Maps</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{...styles.closeButton, backgroundColor: 'red'}}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '90%',
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  postImg: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 12,
  },
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.primaryColor,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: Colors.textGrey,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  detailsText: {
    fontSize: 16,
    color: Colors.grey,
  },
  linkText: {
    color: Colors.primaryColor,
    textDecorationLine: 'underline',
  },
  closeButton: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 20,
    marginTop: 16,
    marginHorizontal: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MarketCardModal;
