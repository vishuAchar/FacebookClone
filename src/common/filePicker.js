import {Platform} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import {launchCamera} from 'react-native-image-picker';
import {ulid} from 'ulid';

const getDateFormat = () => {
  const d = new Date();

  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  let minute = d.getHours();
  let Hours = d.getMinutes();

  return year + month + day + minute + Hours;
};

const filePicker = async () => {
  try {
    const response = await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
      type: [types.allFiles],
      allowMultiSelection: true,
      // copyTo: 'cachesDirectory',
    });
    for (let file of response || []) {
      file['uri'] =
        Platform.OS === 'ios' ? file?.uri.replace('file://', '') : file?.uri;
    }
    return response;
  } catch (error) {
    throw error;
  }
};

const cameraLaunch = async ({user}) => {
  try {
    let options = {
      quality: 0.5,
    };
    const result = await launchCamera(options);

    for (let file of result?.assets || []) {
      let date = new Date();
      //   const uid = ulid();
      file['name'] = `${(user?.name || '').replace(
        ' ',
        '_',
      )}_${getDateFormat()}.jpg`;
      file['size'] = file?.fileSize;
      file['lastModifiedDate'] = date;
      file['uri'] =
        Platform.OS === 'ios' ? file?.uri.replace('file://', '') : file?.uri;
    }
    return result?.assets || [];
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export {filePicker, cameraLaunch};
