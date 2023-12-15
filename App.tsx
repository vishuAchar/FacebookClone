import {StatusBar, ToastAndroid, View, ActivityIndicator} from 'react-native';
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
import {AsyncStorageApi} from './src/ApiHandler/AsyncStroageApi';

const Stack = createStackNavigator();

const App = () => {
  const {user, setUserInfo, userSession, setUserSession} =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  const handleUser = async (userData = {}) => {
    // Store user details in AsyncStorage
    try {
      const userSession = await AsyncStorageApi.storeObjectData(
        'userSession',
        JSON.stringify(userData),
      );
    } catch (error) {
      console.error('Error storing user data:', error);
    }
    if (!userSession) {
      setUserSession(userData);
    }
  };

  useEffect(() => {
    const checkUserInAsyncStorage = async () => {
      try {
        const storedUserData = await AsyncStorageApi.getObjectData('userData');

        if (storedUserData) {
          // If user data is found in AsyncStorage, use it
          const parsedUserData = JSON.parse(storedUserData);
          setUserInfo(parsedUserData);
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
      } finally {
        // Whether user data was found or not, set loading to false
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, user => {
      if (user) {
        handleUser(user);
      } else {
        console.log('user handle no user', user);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return loading ? (
    <>
      <StatusBar
        backgroundColor={Colors.primaryColor}
        barStyle="dark-content"
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.primaryColor,
        }}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    </>
  ) : (
    <>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <NavigationContainer>
        <ToastManager position={'top'} duration={3000} style={{top: 0}} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
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
    </>
  );
};

export default App;
