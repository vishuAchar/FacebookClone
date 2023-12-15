import {FIREBASE_DB} from '../../firebaseConfig/FirebaseConfig';
import {collection, addDoc, setDoc, doc, getDoc} from 'firebase/firestore';
const userCol = 'users';
export const UserStoreApi = {
  getUser: async id => {
    const userRef = doc(FIREBASE_DB, userCol, id);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userInfo = {...docSnap.data(), id: docSnap.id};
        return userInfo;
      } else {
        console.log('No such document!');
        return {};
      }
    } catch (error) {
      console.log(error);
    }
  },
  createUserUsingId: async (id, data) => {
    try {
      const docRef = doc(FIREBASE_DB, userCol, id);
      await setDoc(docRef, data);
      return data;
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  },
};
