import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
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
import {Dropdown} from 'react-native-element-dropdown';
import BoxDropdown from '../../components/BoxDropdown';

const apiKey = {
  MOBILE_NUMBER: 'mobileNumber',
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  YEAR_OF_GRADUATION: 'yearOfGraduation',
  STATE_MEDICAL_COUNCIL: 'stateMedicalCollege',
  REGISTRATION_NUMBER: 'registrationNumber',
};

const yearOfGraduation = [
  {label: '2021', value: '2021'},
  {label: '2020', value: '2020'},
  {label: '2019', value: '2019'},
  {label: '2018', value: '2018'},
  {label: '2017', value: '2017'},
  {label: '2016', value: '2016'},
  {label: '2015', value: '2015'},
  {label: '2014', value: '2014'},
  {label: '2013', value: '2013'},
  {label: '2012', value: '2012'},
  {label: '2011', value: '2011'},
  {label: '2010', value: '2010'},
];

const stateMedicalCouncil = [
  {
    label: 'Andhra Pradesh Medical Council',
    value: 'Andhra Pradesh Medical Council',
  },
  {
    label: 'Assam Medical Council',
    value: 'Assam Medical Council',
  },
  {
    label: 'Bihar Medical Council',
    value: 'Bihar Medical Council',
  },
  {
    label: 'Chhattisgarh Medical Council',
    value: 'Chhattisgarh Medical Council',
  },
  {
    label: 'Delhi Medical Council',
    value: 'Delhi Medical Council',
  },
  {
    label: 'Maharashtra Medical Council',
    value: 'Maharashtra Medical Council',
  },
];

export default function SignupDoctor1(props) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    props.navigation.navigate('SignupDoctor2');
  };
  const [isLoading, setLoading] = useState(false);
  return (
    <ScrollView style={internalstyles.container}>
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
        <BoxDropdown
          name={apiKey.YEAR_OF_GRADUATION}
          title={constants.TXT_YEAR_OF_GRADUATION}
          data={yearOfGraduation}
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
        <BoxDropdown
          name={apiKey.STATE_MEDICAL_COUNCIL}
          title={constants.TXT_STATE_MEDICAL_COUNCIL}
          data={stateMedicalCouncil}
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
        <CommonInput
          name={apiKey.REGISTRATION_NUMBER}
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
        />
      </View>
      <PrimaryButton
        title="Register"
        //   onPress={handleSubmit(onSubmit)}
        onPress={() => {
          props.navigation.navigate('SignupDoctor2');
        }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
          flexDirection: 'row',
          marginBottom: 20,
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
    </ScrollView>
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
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 100,
  },
  input_container: {
    //   marginTop: 10,
  },
});
