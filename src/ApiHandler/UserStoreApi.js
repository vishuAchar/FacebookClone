import {FIREBASE_DB} from '../../firebaseConfig/FirebaseConfig';
import {collection, addDoc, setDoc, doc} from 'firebase/firestore';

export const UserStoreApi = {
  getUsers: async id => {
    const dbCol = 'users';
    const userRef = doc(FIREBASE_DB, userCol, id);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        console.log('User data:', docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
      return {...docSnap.data(), id: docSnap.id};
    } catch (error) {
      console.log(error);
    }
  },
  createUserUsingId: async (id, data) => {
    try {
      const docRef = doc(FIREBASE_DB, 'users', id);
      await setDoc(docRef, data);

      console.log('Document written with ID: ', docRef);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  },
};
