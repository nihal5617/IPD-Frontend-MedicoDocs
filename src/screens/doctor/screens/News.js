import React,{useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../../../styles/colors';
import global from '../../../utility/global';
import constants from '../../../utility/constants';
import CommonInput from '../../../components/CommonInput';
import {useForm} from 'react-hook-form';
import PrimaryButton from '../../../components/PrimaryButton';
import fonts from '../../../utility/fonts';
import Header from '../../../components/Header';
import SearchBox from '../../../components/SearchBox';

export default function News({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      header: () => <Header />,
    });
  }, []);
  return (
    <View style={internalstyles.container}>
      <Text>News</Text>
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
});
