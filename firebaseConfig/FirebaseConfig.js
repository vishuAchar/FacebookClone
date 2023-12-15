// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAG0Vz3Kt9wqu-aPW3Eri6GLUVNBQBmW8o',
  authDomain: 'vym-mobile-app-60673.firebaseapp.com',
  projectId: 'vym-mobile-app-60673',
  storageBucket: 'vym-mobile-app-60673.appspot.com',
  messagingSenderId: '156267146565',
  appId: '1:156267146565:web:0c0b6292f2fb8f6b67e22c',
  measurementId: 'G-9NRJRZRC2E',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORE = getStorage(FIREBASE_APP);
