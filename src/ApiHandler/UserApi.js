import React from 'react';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../firebaseConfig/FirebaseConfig';
import {Toast} from 'toastify-react-native';
import {UserStoreApi} from './UserStoreApi';

export const UserApi = {
  googleSignIn: () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(FIREBASE_AUTH, provider);
    } catch (error) {}
  },
  logOut: () => {
    try {
      signOut(FIREBASE_AUTH);
    } catch (error) {}
  },
  handleLoginWithEmailAndPwd: async ({email, password}) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );

      // You can return user data or a token, depending on your application needs
      return userCredential.user;
    } catch (error) {
      Toast.error('Error Login !');
    }
  },
  createUserWithEmailAndPwd: async ({email, password, fullname}) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      console.log('user cred', userCredential);
      //   const {uid, email} = userCredential;
      const {user} = userCredential;
      const {
        createdAt,
        displayName,
        emailVerified,
        isAnonymous,
        lastLoginAt,
        phoneNumber,
        photoURL,
      } = userCredential;

      const userId = user.uid;

      const userData = {
        userId: userId,
        name: fullname || '',
        email: email,
        isVerified: false,
        createdAt: new Date(),
        displayName: displayName || '',
        emailVerified: emailVerified || false,
        isAnonymous: isAnonymous || false,
        lastLoginAt: lastLoginAt || new Date(),
        phoneNumber: phoneNumber || '',
        photoURL: photoURL || '',
        // userInfo: user,
      };

      console.log('user data', userData);
      const updateUser = await UserStoreApi.createUserUsingId(userId, userData);
      // You can return user data or a token, depending on your application needs
      return updateUser;
      // Get a list of cities from your database
    } catch (error) {
      let errorMsg;
      if (error.code === 'auth/email-already-in-use') {
        errorMsg = 'That email address is already in use!';
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        errorMsg = 'That email address is invalid!';
        console.log('That email address is invalid!');
      }
      Toast.error(errorMsg);
    }
  },
};
