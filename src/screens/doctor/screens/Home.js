import React,{useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../../../styles/colors';
import global from '../../../utility/global';
import constants from '../../../utility/constants';
import CommonInput from '../../../components/CommonInput';
import {useForm} from 'react-hook-form';
// import CustomSwitch from './components/CustomSwitch';
import PrimaryButton from '../../../components/PrimaryButton';
import fonts from '../../../utility/fonts';
import Header from '../../../components/Header';
import SearchBox from '../../../components/SearchBox';

export default function Home({navigation}) {
  
  useEffect(() => {
    navigation.setOptions({
      header: () => <Header />,
    });
  }, []);

  const searchProduct = text => {};

  // const checkError = () => {
  //   if (isShowNoInternetView)
  //     return global.getNoDataView(
  //       constants.NO_INTERNET,
  //       constants.INTERNET_ACCESS_ERROR,
  //       colors.BLACK,
  //     );

  //   if (isUnKnownError)
  //     return global.getNoDataView(
  //       constants.UNKNOWN_ERROR,
  //       constants.UNKNOWN_ERROR_MESSAGE,
  //       colors.BLACK,
  //     );
  // };
  return (
    <View style={internalstyles.container}>
      {/* {checkError()} */}
      <SearchBox
        placeholder={'Search for Patients (Name /Phone Number)...'}
        onIconClick={text => {
          searchProduct(text);
        }}
        style={{
          marginBottom: 12,
        }}
      />
    </View>
  );
}

const internalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 22,
  },
});
