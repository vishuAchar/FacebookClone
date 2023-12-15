import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  // Alert,
  Button,
  Pressable,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalContext} from '../context/GlobalContext';
import {UserStoreApi} from '../ApiHandler/UserStoreApi';
import InputField from '../common/fields/InputField';
import {inputTypeEnum} from '../common/CommonEnum';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';
import {
  defaultUserImage,
  karnataka_districts,
  karnataka_taluks,
  userFields,
} from '../data/userData';
import ImageUploader from '../common/fields/ImageUploader';

// Define the fields array
const RenderFields = ({data, userData, setUserData, handleChange}) => {
  return (
    <View key={data.value} style={styles.action}>
      <View style={styles.actionIcon}>
        <VectorIcon
          name={data.icon}
          type="FontAwesome"
          color={Colors.textGrey}
          size={20}
        />
      </View>
      <InputField
        type={data?.type}
        placeholder={data.label}
        value={userData?.[data?.value]}
        onChange={val => handleChange(val, data?.value)}
        list={data?.list}
      />
    </View>
  );
};

const ProfileImage = ({userData, onChange, image}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            source={{
              uri: image?.uri || defaultUserImage,
            }}
            style={{height: 100, width: 100}}
            imageStyle={{borderRadius: 50}}>
            <View style={styles.imageAddIcon}>
              <ImageUploader onChange={onChange} />
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
        {userData ? userData.name : 'User Name'}
      </Text>
    </View>
  );
};

const EditProfile = ({userInfo}) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo);
      setImage(userInfo?.photoUrl);
    }
  }, [userInfo]);

  const handleInputChange = (value, field) => {
    setUserData({...userData, [field]: value});
  };

  const handlePhoto = imageFile => {
    const image = imageFile?.[0];
    setImage(image);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          margin: 20,
        }}>
        {/* Image picker   */}
        <ProfileImage
          userData={userData}
          image={image}
          onChange={handlePhoto}
        />
        {/* other fields */}
        {userFields.map(field => {
          return (
            <RenderFields
              data={field}
              userData={userData}
              setUserData={setUserData}
              handleChange={handleInputChange}
              key={field.value}
            />
          );
        })}
        <Pressable style={styles.updateBtn}>
          <Text style={styles.btnText}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  actionIcon: {
    marginRight: 10,
    width: 25,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
  imageAddIcon: {
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  updateBtn: {
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',

    backgroundColor: Colors.primaryColor,
  },
  btnText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: 400,
  },
});
