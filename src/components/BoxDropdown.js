import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import global from '../utility/global';
import constants from '../utility/constants';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import {Dropdown} from 'react-native-element-dropdown';
import {useController} from 'react-hook-form';
import styles from '../styles/styles';
export default function BoxDropdown({
  data,
  onChange = () => {},
  title,
  titleNo,
  style,
  control,
  name,
  errors,
  requiredError = `Please select ${title.toLowerCase()}`,
  rules = {},
  placeholder = `Select ${title}`,
  defaultValue = '',
}) {
  const {field} = useController({
    control: control,
    name: name,
    rules: rules,
    defaultValue: defaultValue,
  });

  return (
    <View style={[internalStyles.conatiner, style]}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={internalStyles.text}>{title}</Text>
      </View>
      <View style={[internalStyles.boxView]}>
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={field.value}
          onChange={value => {
            field.onChange(value);
            onChange(value);
          }}
          containerStyle={internalStyles.picker}
          style={internalStyles.dropdown}
          flatListProps={{
            ItemSeparatorComponent: () => (
              <View style={styles.dropdownItemseparator} />
            ),
          }}
        />

        {errors[name]?.type === 'required' &&
          global.getValidateText(requiredError)}
      </View>
    </View>
  );
}

const internalStyles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    paddingBottom: 21,
  },
  picker: {
    maxHeight: 160,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 5,
  },
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._13,
    color: colors.BLACK,
  },
  boxView: {
    marginTop: 10,
  },
  dropdown: {
    borderColor: colors.GREY,
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderRadius: 8,
  },
});
