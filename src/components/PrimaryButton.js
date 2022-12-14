import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import fonts from '../utility/fonts';
import Ripple from 'react-native-material-ripple';
import colors from '../styles/colors';

export default function PrimaryButton({title, onPress = () => {}, style = {}}) {
  return (
    <View style={styles.container}>
      <Ripple style={[styles.ripple, style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  ripple: {
    width: '80%',
    height: 45,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontSize: fonts._16,
    color: colors.WHITE,
  },
});
