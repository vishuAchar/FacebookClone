import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
// import FormButton from '../components/FormButton';
// import {AuthContext} from '../navigation/AuthProvider';

// import firestore from '@react-native-firebase/firestore';
// import PostCard from '../components/PostCard';
import {UserApi} from '../ApiHandler/UserApi';
import {UserStoreApi} from '../ApiHandler/UserStoreApi';
import {GlobalContext} from '../context/GlobalContext';
import EditProfile from './EditProfile';
import {Colors} from '../utils/Colors';
import {userFields} from '../data/userData';
import VectorIcon from '../utils/VectorIcon';

const wallUrl =
  'https://images.unsplash.com/photo-1542442828-287217bfb87f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const createUserProfile = user => {
  return {
    photoUrl:
      user.photoURL ||
      'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=',
    name: user.name || 'Guest',
    location: '',
    email: user.email || '',
    createdAt: user.createdAt || '',
    emailVerified: user.emailVerified || false,
    isActive: user.isActive || false,
    isAnonymous: user.isAnonymous || false,
    isVerified: user.isVerified || false,
    lastLoginAt: user.lastLoginAt || '',
    phoneNumber: user.phoneNumber || '',
    userId: user.userId || '',
    userRole: user.userRole || '',
  };
};
export default ProfileScreen = ({navigation, route}) => {
  const {user, userInfo} = useContext(GlobalContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const getUser = async () => {
    try {
      // const userInfo = await UserStoreApi.getUser(user);
      const userData = createUserProfile(userInfo);
      setUserData(userData);
    } catch (error) {}
  };
  const handleLogout = async () => {
    try {
      const userInfo = await UserApi.logOut();
      // const userData = createUserProfile(userInfo);
      setUserData(null);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return userData ? (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{alignItems: 'flex-start'}}
        showsVerticalScrollIndicator={false}>
        {isEdit ? (
          <>
            {/* Profile Wallpaper */}
            <View style={styles.profileWallpaper}>
              <Image
                source={{
                  uri: wallUrl, // Replace with your image source
                }}
                style={{flex: 1, resizeMode: 'cover', width: '100%'}}
              />
            </View>
            <View style={styles.profileInfo}>
              {/* Profile Image (Foreground) */}
              <View style={styles.firstLayer}>
                <View style={styles.userInfo}>
                  <Image
                    style={styles.userImg}
                    source={{
                      uri: userData ? userData.userImg || wallUrl : wallUrl,
                    }}
                  />
                  {/* User Info */}
                  <View style={styles.userDetails}>
                    <Text style={styles.userName}>
                      {userData ? userData.fname || 'Test user' : 'VYM Admin'}
                    </Text>
                    <Text style={styles.userBio}>
                      {userData
                        ? userData.about || 'No details added.'
                        : 'user bio'}
                    </Text>
                    <Text style={styles.userLocation}>
                      {userData
                        ? userData.about || 'No details added.'
                        : 'user Location'}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.secondLayer}>
                {/* Edit and Message Buttons */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.userBtn,
                      {backgroundColor: Colors.primaryColor},
                    ]}
                    onPress={() => {
                      setIsEdit(prev => !prev);
                      // navigation.navigate('EditProfile');
                    }}>
                    <VectorIcon
                      name="create"
                      type="Ionicons"
                      color={Colors.white}
                      size={20}
                    />
                    <Text style={styles.userBtnTxt}>Edit Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.userBtn,
                      {backgroundColor: Colors.primaryColor},
                    ]}
                    onPress={handleLogout}>
                    <VectorIcon
                      name="power"
                      type="Ionicons"
                      color={Colors.white}
                      size={20}
                    />
                    <Text style={styles.userBtnTxt}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.thirdLayer}>
                {userFields.map(field => {
                  const {label, value} = field;
                  return (
                    <View style={styles.fieldContainer}>
                      <Text style={styles.additionalInfoText} key={value}>
                        {label}:{'  '}
                        {userData?.[value] || '-'}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </>
        ) : (
          <EditProfile userInfo={userInfo} />
        )}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 20,
  },
  profileWallpaper: {
    flex: 1,
    height: 200, // Adjust the height as needed
    width: '100%',
  },
  profileInfo: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -30,
  },
  firstLayer: {
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  secondLayer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 5,
  },
  thirdLayer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderWidth: 1,
  },
  fieldContainer: {
    marginVertical: 5,
  },
  additionalInfoText: {
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    borderRadius: 20,
  },
  userBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#fff',
    textAlign: 'center',
  },
  userInfo: {
    alignItems: 'flex-end',
    marginRight: 70,
    marginTop: 10, // Adjust the top position as needed
  },
  userDetails: {
    alignItems: 'flex-start', // Adjust the top position as needed
    paddingRight: 50,
  },
  userImg: {
    height: 120,
    width: 120,
    borderRadius: 75,
    position: 'absolute', // Position the image absolutely
    top: -60, // Adjust the top position as needed
    left: 20, // Adjust the left position as needed
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userBio: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  userLocation: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  aboutUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
});
