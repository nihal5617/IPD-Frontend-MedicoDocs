import React, {useEffect, useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useController} from 'react-hook-form';
import fonts from '../utility/fonts';
import colors from '../styles/colors';
import Ripple from 'react-native-material-ripple';
import IONI from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import global from '../utility/global';

export default function CommonDateInput(props) {
  const [isOpen, setOpen] = useState(false);
  const [date, setDate] = React.useState(new Date());

  const [flag, setFlag] = useState(props.selectedDate ? true : false);

  useEffect(() => {
    if (props.selectedDate && props.selectedDate != '') {
      setDate(global.getDate(props.selectedDate));
    }
  }, []);

  return (
    <View style={props.style}>
      {props.title && (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={[styles.text, props.titleStyle]}>{props.title}</Text>
          {props.starMark && (
            <Text
              style={[
                styles.text,
                {
                  paddingHorizontal: 3,
                  color: colors.SECONDARY,
                },
              ]}>
              *
            </Text>
          )}
        </View>
      )}
      <Ripple
        style={[styles.boxView, props.textBoxStyle]}
        onPress={() => setOpen(true)}
        disabled={props.disabled}>
        <Text style={[styles.value, props.valueStyle]}>
          {flag ? global.getReadableDate(date) : props.placeholder}
        </Text>
      </Ripple>
      <DatePicker
        modal
        mode="date"
        open={isOpen}
        date={date}
        onConfirm={date => {
          setDate(date);
          // props.onSelectChange(date);
          setOpen(false);
          setFlag(true);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}

CommonDateInput.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  starMark: PropTypes.bool,
  valueStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  textBoxStyle: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onSelectChange: PropTypes.func.isRequired,
  // selectedDate:PropTypes.string,
};

CommonDateInput.defaultProps = {
  rules: {},
  otherTextInputProps: {},
  secureTextEntry: false,
  style: {},
  starMark: false,
  valueStyle: {},
  textBoxStyle: {},
  titleStyle: {},
  disabled: false,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._13,
    color: colors.BLACK,
  },
  boxView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: colors.BOX_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B0B0B0',
    borderStyle: 'solid',
    marginTop: 7,
    paddingStart: 10,
  },

  ripple: {
    flex: 0.2,
    alignItems: 'center',
  },
  value: {
    flex: 1,
    fontSize: fonts._13,
    fontFamily: fonts.FONT_FAMILY.Regular,
    color: colors.BLACK,
  },
});
