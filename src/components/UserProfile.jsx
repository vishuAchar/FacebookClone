import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button as RNButton,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserProfileForm from './UserProfileForm';
import {userDetailsData} from '../data/userData';

const formFields = [
  {key: 'dob', label: 'Date of Birth'},
  {key: 'age', label: 'Age'},
  {key: 'occupation', label: 'Occupation'},
  {key: 'fathersName', label: "Father's Name"},
  {key: 'mothersName', label: "Mother's Name"},
  {key: 'aadhaarNo', label: 'Aadhaar Number'},
  {key: 'address', label: 'Address'},
  {key: 'mobileNumber', label: 'Mobile Number'},
  {key: 'email', label: 'Email'},
];

const UserDetails = ({username, name, profileImage, bio, toggleEdit}) => (
  <View style={styles.userDetailsContainer}>
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleEdit} style={styles.editButton}>
        <Icon name="create" size={20} color="#000" />
      </TouchableOpacity>
      {profileImage ? (
        <Image source={{uri: profileImage}} style={styles.profileImage} />
      ) : (
        <View style={styles.initialsContainer}>
          <Text style={styles.initialsText}>{name.charAt(0)}</Text>
        </View>
      )}
      <View style={styles.headerText}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  </View>
);

const FormField = ({label, value}) => (
  <View style={styles.formField}>
    <Text style={styles.label}>
      {label}: {value}
    </Text>
  </View>
);

const UserProfileScreen = () => {
  const {username, name, profileImage, bio, posts} = userDetailsData;

  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    username,
    name,
    profileImage,
    bio,
    dob: '',
    age: '',
    occupation: '',
    fathersName: '',
    mothersName: '',
    aadhaarNo: '',
    address: '',
    mobileNumber: '',
    email: '',
  });

  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const handleFormSubmit = updatedUserData => {
    setUserData(updatedUserData);
    setEditing(false);
  };

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleScroll = event => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const totalHeight = event.nativeEvent.contentSize.height;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;

    const isCloseToBottom = currentOffset >= totalHeight - screenHeight;

    if (isCloseToBottom) {
      setShowLogoutButton(true);
    } else {
      setShowLogoutButton(false);
    }
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <ScrollView
      style={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={16}>
      <UserDetails
        username={username}
        name={name}
        profileImage={profileImage}
        bio={bio}
        toggleEdit={toggleEdit}
      />

      {editing ? (
        <UserProfileForm onSubmit={handleFormSubmit} initialData={userData} />
      ) : (
        <View>
          <Text style={styles.heading}>User Details</Text>
          {formFields.map(field => (
            <FormField
              key={field.key}
              label={field.label}
              value={userData[field.key]}
              onChange={text =>
                setUserData(prevData => ({...prevData, [field.key]: text}))
              }
              editable={editing}
            />
          ))}
        </View>
      )}

      {showLogoutButton && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userDetailsContainer: {
    width: 300,
    // flex: 1,

    // borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  initialsContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    fontSize: 24,
    color: '#fff',
  },
  headerText: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    color: '#555',
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  formField: {
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  postsContainer: {
    marginTop: 20,
  },
  postsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  postText: {
    fontSize: 16,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UserProfileScreen;
