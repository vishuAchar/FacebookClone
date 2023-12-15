import React, {useContext} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {PermissionTypes} from '../CommonEnum';
import {
  requestCameraPermission,
  requestReadStoragePermission,
} from '../androidPermission';
import {GlobalContext} from '../../context/GlobalContext';
import VectorIcon from '../../utils/VectorIcon';
import {Colors} from '../../utils/Colors';
import {cameraLaunch, filePicker} from '../filePicker';

function ImageUploader({onChange}) {
  const [openFilePopup, setOpenFilePopup] = useState(false);
  //for android permission check
  const {user, userInfo, androidPermCheck, setAndroidPermCheck} =
    useContext(GlobalContext);

  const handleOpenFilePopUp = value => {
    setOpenFilePopup(value);
  };

  const handleTakePhoto = async () => {
    try {
      //   setHideToast(true);
      if (Platform.OS === 'ios') {
        const result = await cameraLaunch();
        onChange(result);
        setOpenFilePopup(!openFilePopup);
      } else {
        // In android permission need to check
        const permission = androidPermCheck[PermissionTypes.CAMERA]
          ? true
          : await requestCameraPermission();
        console.log('permissiom after');
        if (permission) {
          androidPermCheck[PermissionTypes.CAMERA] = true;
          setAndroidPermCheck({...androidPermCheck});
          const result = await cameraLaunch({
            user: userInfo,
          });
          onChange(result);
          setOpenFilePopup(!openFilePopup);
        }
      }
      //   setHideToast(false);
    } catch (error) {
      Alert.alert(error);
      //   setHideToast(false);
    }
  };

  const handleAttachFile = async () => {
    try {
      //   setHideToast(true);
      if (Platform.OS === 'ios') {
        const filesSelected = await filePicker();
        onChange(filesSelected);
        setOpenFilePopup(!openFilePopup);
      } else {
        console.log('permissiom file before');
        console.log('permissiom file before');

        // In android permission need to check
        const permission = androidPermCheck[PermissionTypes.READ_STORAGE]
          ? true
          : await requestReadStoragePermission();
        console.log('permissiom file after', permission);
        if (permission) {
          androidPermCheck[PermissionTypes.READ_STORAGE] = true;
          setAndroidPermCheck({...androidPermCheck});
          const filesSelected = await filePicker();
          console.log('permissiom file selected', filesSelected);
          onChange(filesSelected);
          setOpenFilePopup(!openFilePopup);
        }
      }
      //   setHideToast(false);
    } catch (error) {
      //   setHideToast(false);
    }
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={e => handleOpenFilePopUp(true)}>
        <VectorIcon
          name="edit"
          type="FontAwesome5"
          color={Colors.headerIconGrey}
          size={20}
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={openFilePopup}
        onRequestClose={() => handleOpenFilePopUp(false)}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => handleOpenFilePopUp(false)}
          style={{
            flex: 1,
          }}></TouchableOpacity>
        <View
          style={{
            ...styles.commonFile_popupContainer,
            ...styles.commonModalContainer,
          }}>
          <TouchableOpacity activeOpacity={1} onPress={handleTakePhoto}>
            <Text style={styles.commonFile_popupTakePhoto}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={handleAttachFile}>
            <Text style={styles.commonFile_popupAttachFile}>Attach File</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  commonFile_popupContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EAEAFF',
    backgroundColor: 'white',
    width: 200,
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 100,
    top: 30,
    right: 0,
    opacity: 1,
  },
  commonFile_popupTakePhoto: {
    //  fontFamily: fontStyle.Roboto,
    fontSize: 16,
    color: '#2C2948',
    // textAlignVertical: 'center',
    paddingTop: 18,
    paddingHorizontal: 20,
  },
  commonFile_popupAttachFile: {
    //  fontFamily: fontStyle.Roboto,
    fontSize: 16,
    color: '#2C2948',
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  commonModalContainer: {
    top: 220,
    right: '3%',
  },
  commonModalContainerCentered: {
    //  top: position?.y,
    //  left: position?.x,
  },
});

export default ImageUploader;
