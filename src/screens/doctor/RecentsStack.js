import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import styles from '../../styles/styles';
import Recents from './screens/Recents';
import PatientsData from './screens/PatientsData';
const Stack = createNativeStackNavigator();

const tabHiddenRoutes = ['PatientsData'];

export default function HomeStack({navigation, route}) {
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
      <Stack.Screen name="Recents" component={Recents} />
        <Stack.Screen name="PatientsData" component={PatientsData} />
    </Stack.Navigator>
  );
}
