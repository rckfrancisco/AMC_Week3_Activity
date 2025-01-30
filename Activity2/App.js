import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [number, onChangeCnumber] = React.useState('Contact Number: ');
  const [about, onChangeAbout] = React.useState('About Me: ');


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCnumber}
          value={number}
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={about => onChangeAbout(about)}
          value={about}
          style={styles.about}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
  },
   about: {
     borderWidth: 1,
     margin: 12,
   },
});

export default TextInputExample;