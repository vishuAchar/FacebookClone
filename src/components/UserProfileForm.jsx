// UserProfileForm.js

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const UserProfileForm = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [mothersName, setMothersName] = useState('');
  const [aadhaarNo, setAadhaarNo] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Validate inputs if needed
    const userData = {
      username,
      name,
      dob,
      age,
      occupation,
      fathersName,
      mothersName,
      aadhaarNo,
      address,
      mobileNumber,
      email,
    };
    onSubmit(userData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Date of Birth"
        value={dob}
        onChangeText={text => setDob(text)}
        style={styles.input}
      />
      <TextInput
        label="Age"
        value={age}
        keyboardType="numeric"
        onChangeText={text => setAge(text)}
        style={styles.input}
      />
      <TextInput
        label="Occupation"
        value={occupation}
        onChangeText={text => setOccupation(text)}
        style={styles.input}
      />
      <TextInput
        label="Father's Name"
        value={fathersName}
        onChangeText={text => setFathersName(text)}
        style={styles.input}
      />
      <TextInput
        label="Mother's Name"
        value={mothersName}
        onChangeText={text => setMothersName(text)}
        style={styles.input}
      />
      <TextInput
        label="Aadhaar Number"
        value={aadhaarNo}
        onChangeText={text => setAadhaarNo(text)}
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={text => setAddress(text)}
        multiline
        style={styles.input}
      />
      <TextInput
        label="Mobile Number"
        value={mobileNumber}
        onChangeText={text => setMobileNumber(text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default UserProfileForm;
