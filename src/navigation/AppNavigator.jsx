import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginStack } from '@/navigation/Sracks';
import MainTabs from '@/navigation/TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator({ isLoggedIn = false }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name='Main' component={MainTabs} />
        ) : (
          <Stack.Screen name='Login' component={LoginStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
