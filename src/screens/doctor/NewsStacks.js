import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import News from './screens/News';
import styles from '../../styles/styles';

const Stack = createNativeStackNavigator();
const tabHiddenRoutes = [];

export default function NewsStacks({navigation, route}) {
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
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
}
