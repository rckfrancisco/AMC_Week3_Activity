import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
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

      <View style={styles.container}>
      <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/9314/9314450.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        </View>

       <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/5670/5670747.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
        />
        </View>

        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/535/535239.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        </View>

        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2830/2830191.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
        />
        </View>

        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/864/864685.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
        />
        </View>

        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/646/646094.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        </View>

        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3059/3059408.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCnumber}
          value={number}
        />
        </View>

        <View style={styles.container}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3503/3503827.png',
          }}
          style={{width: 50, height: 50}}
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
        </View>
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
   container: {
     flex: 1,
     padding: 20,
     flexDirection: 'row',
   },
});

export default TextInputExample;