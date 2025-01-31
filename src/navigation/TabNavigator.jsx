import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, OrdersStack, ProfileStack } from '@/navigation/Sracks';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{ title: 'Home', headerShown: false }}
      />
      <Tab.Screen
        name='OrdersTab'
        component={OrdersStack}
        options={{ title: 'Orders', headerShown: false }}
      />
      <Tab.Screen
        name='ProfileTab'
        component={ProfileStack}
        options={{ title: 'Profile', headerShown: false }}
      />
    </Tab.Navigator>
  );
}
