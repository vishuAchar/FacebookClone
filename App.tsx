import {StatusBar, ToastAndroid, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {onAuthStateChanged} from 'firebase/auth';
import MainScreen from './src/screens/MainScreen';
import WelcomePage from './src/screens/Welcome';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {Colors} from './src/utils/Colors';
import {FIREBASE_AUTH} from './firebaseConfig/FirebaseConfig';
import ToastManager, {Toast} from 'toastify-react-native';
import {GlobalContext} from './src/context/GlobalContext';

const Stack = createStackNavigator();

const App = () => {
  const {user, setUser, userInfo, setUserInfo} = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  const handleUser = (user: any) => {
    setUserInfo(user);
    Toast.success('Welcome to the app');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, user => {
      if (user) handleUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    // You might want to render a loading indicator here
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ToastManager
        position={'top'}
        duration={3000}
        style={{top: 0}}
        // width={300}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {false ? (
          <Stack.Screen name="MainScreen" component={MainScreen} />
        ) : (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomePage} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
