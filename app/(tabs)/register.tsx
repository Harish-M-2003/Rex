import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Checkbox from 'expo-checkbox';


export default function Register() {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [instagramID, setInstagramID] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [focusedField, setFocusedField] = React.useState('');

  const handleSubmit = () => {
    if (!isChecked) {
        alert('Please accept the terms and conditions');
        return
    }
    if (!fullName || !email || !password || !address || !phoneNumber || !instagramID) { 
        alert("Please fill all the details");
        return;
    } 
    console.log('Form submitted:', { fullName, email, address, phoneNumber, instagramID, password, isChecked });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Register Account</Text>
      <Text style={styles.morecontent}>
        Welcome to our platform! We are excited to have you join our community.
        To get started, please fill out the form below to create your account.
      </Text>

      <TextInput
        value={fullName}
        onChangeText={setFullName}
        placeholder='Full Name'
        style={[styles.input, focusedField === 'fullName' && styles.inputFocused]}
        onFocus={() => setFocusedField('fullName')}
        onBlur={() => setFocusedField('')}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        style={[styles.input, focusedField === 'email' && styles.inputFocused]}
        onFocus={() => setFocusedField('email')}
        onBlur={() => setFocusedField('')}
        keyboardType='email-address'
      />

      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder='Address'
        style={[styles.input, focusedField === 'address' && styles.inputFocused]}
        onFocus={() => setFocusedField('address')}
        onBlur={() => setFocusedField('')}
      />

      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder='Phone Number'
        style={[styles.input, focusedField === 'phoneNumber' && styles.inputFocused]}
        onFocus={() => setFocusedField('phoneNumber')}
        onBlur={() => setFocusedField('')}
        keyboardType='phone-pad'
      />

      <TextInput
        value={instagramID}
        onChangeText={setInstagramID}
        placeholder='Instagram ID'
        style={[styles.input, focusedField === 'instagramID' && styles.inputFocused]}
        onFocus={() => setFocusedField('instagramID')}
        onBlur={() => setFocusedField('')}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        style={[styles.input, focusedField === 'password' && styles.inputFocused]}
        onFocus={() => setFocusedField('password')}
        onBlur={() => setFocusedField('')}
        secureTextEntry
      />

      <View style={styles.checkboxContainer}>
      <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? '#4630EB' : undefined}
        />

        <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle} >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 14,
    fontWeight: 'bold',
  },
  morecontent: {
    marginTop: 12,
    marginBottom: 12,
  },
  checkbox: {
    margin: 8,
  },

  input: {
    height: 40,
    borderColor: '#7A00E6',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 12,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: 'blue',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonStyle: {
    backgroundColor: '#7A00E6',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  loginText: {
    color: 'black',
  },
  loginLink: {
    color: '#7A00E6',
    fontWeight: 'bold',
  },

});
