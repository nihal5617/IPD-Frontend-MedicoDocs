import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import Profile from './screens/Profile';
import styles from '../../styles/styles';

const Stack = createNativeStackNavigator();

const tabHiddenRoutes = [];

export default function ProfileStack({navigation, route}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({
        tabBarStyle: [styles.bottomTabBarStyle, {display: 'none'}],
      });
    } else {
      navigation.setOptions({
        tabBarStyle: [styles.bottomTabBarStyle, {display: 'flex'}],
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
