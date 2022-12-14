import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardStack from './OnBoardStack';
import Splash from './onBoard/Splash';

const Stack = createNativeStackNavigator();

export default function RootContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoard" component={OnBoardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
