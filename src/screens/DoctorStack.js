import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import IconM from 'react-native-vector-icons/FontAwesome5';
import constants from '../utility/constants';
import global from '../utility/global';
import HomeStack from '../screens/doctor/HomeStack';
import NewsStack from '../screens/doctor/NewsStacks';
import RecentsStack from '../screens/doctor/RecentsStack';
import ProfileStack from '../screens/doctor/ProfileStack';

const getTabBarIcon = (route,focused, color) => {
  if (route.name === 'HomeStack') {
    return global.drawIcon(constants.IC_FEATHER, 'home', 26, color);
  } else if (route.name === 'NewsStack') {
    return global.drawIcon(constants.IC_OCTICONS, 'webhook', 26, color);
  } else if (route.name === 'RecentsStack') {
    return global.drawIcon(constants.IC_OCTICONS, 'clock', 26, color);
  } else if (route.name === 'ProfileStack') {
    return global.drawIcon(constants.IC_OCTICONS, 'person', 26, color);
  }
};

const Tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => getTabBarIcon(route, focused, color),
        tabBarActiveTintColor: colors.BLACK,
        tabBarInactiveTintColor: colors.TAB_INACTIVE,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.bottomTabBarStyle,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="NewsStack" component={NewsStack} />
      <Tab.Screen name="RecentsStack" component={RecentsStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function DoctorStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'DoctorScreen'} component={bottomTabNavigator} />
    </Stack.Navigator>
  );
}
