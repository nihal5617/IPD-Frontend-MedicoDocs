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

const apiKey = {
  OTP: 'otp',
};

export default function GetOtp(props) {
  console.log(props);
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    if (props.route.params.isDoctor) {
      setTimeout(() => {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'DotorStack'}],
        });
      }, 1000);
    } else {
      setTimeout(() => {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'PatientStack'}],
        });
      }, 1000);
    }
  };
  const [isLoading, setLoading] = useState(false);
  return (
    <View style={internalstyles.container}>
      <View style={internalstyles.image_container}>
        <Image
          source={require('../../assets/images/logo_with_text.png')}
          style={internalstyles.image}
          resizeMode="contain"
        />
      </View>
      <View style={internalstyles.input_container}>
        <CommonInput
          name={apiKey.OTP}
          title={constants.TXT_ENTER_OTP}
          control={control}
          errors={errors}
          starMark={true}
          rules={{
            required: true,
            pattern: global.getPositiveNumberRegex(),
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
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
          flexDirection: 'row',
        }}>
        <Text>Didn't Receive OTP?{'  '}</Text>
        <Ripple
          onPress={() => {
            // props.navigation.navigate('Register');
          }}>
          <Text
            style={{
              color: colors.PRIMARY,
              textDecorationLine: 'underline',
            }}>
            Click Here
          </Text>
        </Ripple>
      </View>
      <PrimaryButton title="Confirm" onPress={handleSubmit(onSubmit)} />
      <Ripple
        style={internalstyles.need_help}
        onPress={() => {
          props.navigation.navigate('NeedHelp');
        }}>
        <Text style={internalstyles.needHelpText}>Need Help?</Text>
      </Ripple>
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
