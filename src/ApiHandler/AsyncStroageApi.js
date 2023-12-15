import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageApi = {
  storeStringData: async value => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
    }
  },
  storeObjectData: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  },
  getStringData: async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  },
  getObjectData: async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  },
};
