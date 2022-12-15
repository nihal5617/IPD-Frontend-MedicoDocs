import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {useController} from 'react-hook-form';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import global from '../utility/global';

export default function CommonInput({
  title,
  control,
  name,
  errors,
  rules = {},
  requiredError = `Please enter ${title.toLowerCase()}`,
  validationError = `Please enter valid ${title.toLowerCase()}`,
  otherTextInputProps = {},
  style = {},
  textBoxStyle = {},
  secureTextEntry = false,
  starMark = false,
}) {
  const {field} = useController({
    control: control,
    name: name,
    rules: rules,
  });

  const [isHidePassword, setHidePassword] = useState(true);
  return (
    <View style={style}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.text}>{title}</Text>
        {starMark && (
          <Text
            style={[
              styles.text,
              {
                paddingHorizontal: 3,
                color: colors.SECONDARY,
                opacity: 1,
              },
            ]}>
            *
          </Text>
        )}
      </View>

      <View style={[styles.boxView, textBoxStyle]}>
        <TextInput
          style={styles.textInput}
          onChangeText={field.onChange}
          value={field.value}
          secureTextEntry={secureTextEntry ? isHidePassword : false}
          {...otherTextInputProps}
        />
      </View>
      {errors[name]?.type === 'required' &&
        global.getValidateText(requiredError)}
      {errors[name]?.type === 'pattern' &&
        global.getValidateText(validationError)}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._12,
    color: colors.BLACK,
  },
  boxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.GREY,
    borderStyle: 'solid',
    marginTop: 7,
    paddingStart: 10,
  },

  textInput: {
    flex: 1,
    fontSize: fonts._13,
    textAlignVertical: 'center',
    color: colors.BLACK,
  },
  ripple: {
    flex: 0.2,
    alignItems: 'center',
  },
});
