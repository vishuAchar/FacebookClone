import React, {createContext, useContext, useEffect, useState} from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = props => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (userInfo) {
      const id = userInfo.uid;
      console.log('id', id);
      setUser(id);
    }
  }, [userInfo]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        userInfo,
        setUserInfo,
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
