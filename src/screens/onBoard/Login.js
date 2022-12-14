import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../../styles/colors';
import global from '../../utility/global';
import constants from '../../utility/constants';
import CommonInput from '../../components/CommonInput';
import {useForm} from 'react-hook-form';
// import CustomSwitch from './components/CustomSwitch';
import PrimaryButton from '../../components/PrimaryButton';
import fonts from '../../utility/fonts';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const apiKey = {
  MOBILE: 'mobile',
  LOGIN_TYPE: 'loginType',
  DOCTOR_ID: 'doctorId',
};

export default function Login(props) {
  const renderPage = (props, isDoctor) => {
    const [isLoading, setLoading] = useState(false);
    const {
      control,
      handleSubmit,
      setValue,
      formState: {errors},
    } = useForm();

    const onSubmit = data => {
      console.log(props);
      props.navigation.navigate('EnterOtp');
    };
    return (
      <View style={internalstyles.container}>
        <View style={internalstyles.input_container}>
          <CommonInput
            name={apiKey.MOBILE}
            title={constants.TXT_MOBILE_NUMBER}
            control={control}
            errors={errors}
            starMark={true}
            rules={{
              required: true,
              pattern: global.getValidPhoneNumberRegex(),
            }}
            otherTextInputProps={{
              editable: !isLoading,
            }}
            style={{
              marginTop: 26,
            }}
            requiredError={constants.ERROR_MOBILE}
            validationError={constants.ERROR_MOBILEV}
          />
          {isDoctor && (
            <CommonInput
              name={apiKey.DOCTOR_ID}
              title={constants.TXT_DOCTOR_REGISTRATION_NO}
              control={control}
              errors={errors}
              starMark={true}
              rules={{
                required: true,
              }}
              otherTextInputProps={{
                editable: !isLoading,
              }}
              style={{
                marginTop: 26,
              }}
              requiredError={constants.ERROR_MOBILE}
              validationError={constants.ERROR_MOBILEV}
            />
          )}
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 5,
            flexDirection: 'row',
          }}>
          <Text>Dont have an Account ?{'  '}</Text>
          <Ripple
            onPress={() => {
              isDoctor
                ? props.navigation.navigate('SignupDoctor1')
                : props.navigation.navigate('SignupPatient');
            }}>
            <Text
              style={{
                color: colors.PRIMARY,
                textDecorationLine: 'underline',
              }}>
              Register
            </Text>
          </Ripple>
        </View>
        <PrimaryButton title="Generate OTP" onPress={handleSubmit(onSubmit)} />
        <Ripple
          style={internalstyles.need_help}
          onPress={() => {
            // props.navigation.navigate('NeedHelp');
          }}>
          <Text style={internalstyles.needHelpText}>Need Help?</Text>
        </Ripple>
      </View>
    );
  };
  return (
    <View style={[styles.styleFull, {paddingHorizontal: 22}]}>
      <View style={internalstyles.image_container}>
        <Image
          source={require('../../assets/images/logo_with_text.png')}
          style={internalstyles.image}
          resizeMode="contain"
        />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.WHITE,
          inactiveTintColor: colors.BLACK,
          indicatorStyle: {
            height: '100%',
            borderRadius: 7,
            backgroundColor: colors.PRIMARY,
          },
          labelStyle: {
            fontSize: fonts._12,
            fontFamily: fonts.FONT_FAMILY_MEDIUM,
          },
          style: {
            width: '50%',
            alignSelf: 'center',
            borderRadius: 7,
            backgroundColor: colors.WHITE,
          },
        }}>
        <Tab.Screen name="Patient" component={() => renderPage(props)} />
        <Tab.Screen name="Doctor" component={() => renderPage(props, true)} />
      </Tab.Navigator>
    </View>
  );
}

const internalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 22,
    paddingTop: 0,
  },
  image_container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 100,
  },
  switch_container: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container: {
    marginTop: 10,
  },
  need_help: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  needHelpText: {
    fontFamily: fonts.FONT_FAMILY.Medium,
    fontSize: fonts.FONT_SIZE._12,
    color: colors.BLACK,
  },
});
