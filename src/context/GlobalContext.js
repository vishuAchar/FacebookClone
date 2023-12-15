import React, {createContext, useContext, useEffect, useState} from 'react';
import {UserStoreApi} from '../ApiHandler/UserStoreApi';
import {AsyncStorageApi} from '../ApiHandler/AsyncStroageApi';

export const GlobalContext = createContext();

const defaultPermission = {
  admin: {
    screens: {
      home: true,
      friends: true,
      watch: true,
      marketPlace: true,
      notification: true,
      profile: true,
    },
  },
};

const userRoles = {
  isAdmin: true,
  isMember: true,
  isGuest: true,
  isApprover: true,
};

const GlobalContextProvider = props => {
  const [user, setUser] = useState(null);
  const [userSession, setUserSession] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(userRoles);
  const [userPermission, setUserPermission] = useState([]);
  const [androidPermCheck, setAndroidPermCheck] = useState({});

  const handleUserChange = async userSession => {
    const id = userSession.uid;
    const isAdmin = user?.isAdmin;
    const permissions = defaultPermission['admin'];
    const userInfo = await UserStoreApi.getUser(id);
    await AsyncStorageApi.storeObjectData('userInfo', userInfo);
    setUserInfo(userInfo);
    setUserPermission(permissions);
    setUser(id);
    console.log({user, userInfo, userRole, userPermission});
  };

  useEffect(() => {
    if (userSession) {
      console.log({userSession});
      handleUserChange(userSession);
    } else {
      setUser(null);
    }
  }, [userSession]);
  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        setUserSession,
        userInfo,
        setUserInfo,
        userPermission,
        setUserPermission,
        androidPermCheck,
        setAndroidPermCheck,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

// Usage of useContext should be within a component or a custom hook
// For example, you can use it in a component like this:

// import { useContext } from 'react';
// import { GlobalContext } from './GlobalContextProvider';

// const MyComponent = () => {
//   const { user, setUser, userInfo, setUserInfo } = useContext(GlobalContext);

//   // rest of your component logic
// };
