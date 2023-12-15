import {PermissionsAndroid} from 'react-native';
import {Platform} from 'react-native';

const requestCameraPermission = async () => {
  try {
    console.log('permissiom granted before');
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log('permissiom granted after', granted);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const requestReadStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const requestPostNotificationPermission = async () => {
  const deviceAPiLevel = Platform.Version;
  try {
    if (Platform.OS === 'android' && deviceAPiLevel >= 33) {
      const granted = await PermissionsAndroid.request(
        'android.permission.POST_NOTIFICATIONS',
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    throw error;
  }
};

export {
  requestCameraPermission,
  requestStoragePermission,
  requestReadStoragePermission,
  requestPostNotificationPermission,
};
