import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import HomeScreen from '@/screens/HomeScreen';
import OrdersScreen from '@/screens/OrdersScreen';
import ProfileScreen from '@/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const OrdersStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Orders'
      component={OrdersScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Profile'
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
