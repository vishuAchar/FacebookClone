import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../utils/Colors';

const WelcomePage = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  // Animated value for welcome message opacity
  const welcomeOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation for welcome message
    Animated.timing(welcomeOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [welcomeOpacity]);

  return (
    <>
      <StatusBar backgroundColor="#0A0E4E" barStyle="light-content" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/welcome-image.jpg')}
          style={styles.image}>
          <Animated.View style={[styles.overlayTop, {opacity: welcomeOpacity}]}>
            <Text style={styles.title}>Welcome to My App!</Text>
          </Animated.View>
          <View style={styles.overlayBottom}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <VectorIcon
                name="arrow-forward-outline"
                type="Ionicons"
                size={25}
                color={'orange'}
              />
              <Text style={styles.buttonText}>Get started</Text>
              <VectorIcon
                name="arrow-forward-circle-outline"
                type="Ionicons"
                size={30}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  overlayTop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  overlayBottom: {
    backgroundColor: 'orange',
    marginBottom: 20,
    marginHorizontal: 50,
    borderRadius: 50, // Make the button rounded
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default WelcomePage;
