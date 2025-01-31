import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  console.log('LoginScreen');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title='Login'
        onPress={() => navigation.replace('Main')} // Replace with your authentication logic
      />
    </View>
  );
};

export default LoginScreen;
