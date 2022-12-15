import React, {useEffect, useState} from 'react';
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
import Header from '../../components/Header';

const apiKey = {
  EMAIL: 'email',
  DESCRIPTION: 'description',
};

export default function NeedHelp({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          showBackButton={true}
          navigation={navigation}
          title="Need Help"
        />
      ),
    });
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = data => {
    console.log(data);
    global.showAlert(
      'Thank you for contacting us. We will get back to you soon.',
    );
    navigation.goBack();
  };
  return (
    <View style={internalstyles.container}>
      <View style={internalstyles.input_container}>
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
        <CommonInput
          name={apiKey.DESCRIPTION}
          title={constants.TXT_DESCRIPTION}
          control={control}
          errors={errors}
          starMark={true}
          rules={{
            required: true,
          }}
          otherTextInputProps={{
            editable: !isLoading,
            multiline: true,
            numberOfLines: 5,
          }}
          style={{
            marginTop: 26,
          }}
          textBoxStyle={{
            height: 150,
          }}
          requiredError={constants.ERROR_DESCRIPTION}
        />
      </View>
      <PrimaryButton title="Submit" onPress={handleSubmit(onSubmit)} />
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
  input_container: {
    marginTop: 10,
  },
});
