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
import CommonDateInput from '../../components/CommonDateInput';

const apiKey = {
  MOBILE_NUMBER: 'mobileNumber',
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  DATE_OF_BIRTH: 'dateOfBirth',
};

export default function SignupPatient(props) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    props.navigation.navigate('EnterOTP');
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
          name={apiKey.MOBILE_NUMBER}
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
        <CommonInput
          name={apiKey.FULL_NAME}
          title={constants.TXT_FULL_NAME}
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
          requiredError={constants.ERROR_NAME}
          validationError={constants.ERROR_NAMEV}
        />
        <CommonInput
          name={apiKey.EMAIL}
          title={constants.TXT_EMAIL_ADDRESS}
          control={control}
          errors={errors}
          starMark={true}
          rules={{
            required: true,
            pattern: global.getValidEmailIDRegex(),
          }}
          otherTextInputProps={{
            editable: !isLoading,
          }}
          style={{
            marginTop: 26,
          }}
          requiredError={constants.ERROR_EMAIL}
          validationError={constants.ERROR_EMAILV}
        />
        <CommonDateInput
            name={apiKey.DATE_OF_BIRTH}
            title={constants.TXT_DATE_OF_BIRTH}
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
        />
      </View>
      <PrimaryButton title="Register" onPress={handleSubmit(onSubmit)} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
          flexDirection: 'row',
        }}>
        <Text>Have An Account?{'  '}</Text>
        <Ripple
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text
            style={{
              color: colors.PRIMARY,
              textDecorationLine: 'underline',
            }}>
            Login
          </Text>
        </Ripple>
      </View>
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
});
