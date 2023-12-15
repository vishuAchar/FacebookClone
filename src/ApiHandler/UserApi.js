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
import {userRoleEnum} from '../common/CommonEnum';

export const UserApi = {
  googleSignIn: async () => {
    try {
      const provider = await new GoogleAuthProvider();
      signInWithPopup(FIREBASE_AUTH, provider);
    } catch (error) {}
  },
  logOut: async () => {
    try {
      await signOut(FIREBASE_AUTH);
    } catch (error) {}
  },
  handleLoginWithEmailAndPwd: async ({email, password}) => {
    try {
      console.log({email: email, password: password});
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      const docId = userCredential?.user?.uid;
      const userData = await UserStoreApi.getUser(docId);
      console.log('user cred', {docId, userData});

      // You can return user data or a token, depending on your application needs
      return userCredential;
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
      const {
        user,
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
        isActive: false,
        createdAt: new Date(),
        displayName: displayName || '',
        emailVerified: emailVerified || false,
        isAnonymous: true,
        lastLoginAt: lastLoginAt || new Date(),
        phoneNumber: phoneNumber || '',
        photoURL: photoURL || '',
        userRole: userRoleEnum.GUEST,
      };
      const updateUser = await UserStoreApi.createUserUsingId(userId, userData);
      return updateUser;
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
