import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GetOtp from './onBoard/GetOtp';
import Login from './onBoard/Login';
import onBoard from './onBoard/onBoard';
import SignupPatient from './onBoard/SignupPatient';

const Stack = createNativeStackNavigator();

export default function OnBoardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoard1"
        component={onBoard}
        initialParams={{
          image: require('../assets/images/logo.png'),
          title: 'Welcome to MedicoDocs',
          content:
            'All your medical records digtially and safely saved with just one click away to view it.',
          position: 1,
        }}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoard2"
        component={onBoard}
        initialParams={{
          image: require('../assets/onBoard/no_paper_ob2.png'),
          title: 'No More Paperwork',
          content:
            'No more need to take a file with you With just a tap of a button, you can go through your patient’s record and update them.',
          position: 2,
        }}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoard3"
        component={onBoard}
        initialParams={{
          image: require('../assets/onBoard/security_ob3.png'),
          title: 'End-to-end Encryption',
          content:
            'Built with Cryptography encryption  mechanisms and no information is shared without your consent.',
          position: 3,
        }}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EnterOtp"
        component={GetOtp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupPatient"
        component={SignupPatient}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
