import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import colors from '../styles/colors';
import global from '../utility/global';
import constants from '../utility/constants';
import fonts from '../utility/fonts';

export default function Header(props) {
  const close = () => {
    props.navigation.goBack(null);
  };

  const openDrawer = () => {
    console.log('toolbar openDrawer!');
    props.navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      {props.showBackButton && (
        <TouchableHighlight
          style={[styles.btnBack, {padding: 0}]}
          onPress={() => close()}
          underlayColor={colors.RIPPLE_EFFECT}>
          {global.drawIcon(
            constants.IC_IONiCONS,
            'ios-chevron-back-outline',
            25,
            colors.BLACK,
          )}
        </TouchableHighlight>
      )}
      {props.title ? (
        <Text numberOfLines={1} style={[styles.title]}>
          {props.title}
        </Text>
      ) : (
        <View style={{flex: 0.5}}>
          <Image
            source={require('../assets/images/logo_with_text.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      )}

      {props.showHamBurger && (
        <Ripple
          style={[styles.endICon, {flex: 0.5}]}
          onPress={() => openDrawer()}>
          {global.drawIcon(constants.IC_MATERIAL, 'menu', 25, colors.SECONDARY)}
        </Ripple>
      )}
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
  showHamBurger: PropTypes.bool,
  showProfileHeadar: PropTypes.bool,
};

Header.defaultProps = {
  showBackButton: false,
  showHamBurger: false,
  showProfileHeadar: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    paddingHorizontal: 15,
    elevation: 5,
  },
  btnBack: {
    alignSelf: 'center',
    height: 40,
    width: 40,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  endICon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  title: {
    color: colors.BLACK,
    fontSize: fonts._18,
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontWeight: 'bold',
  },

  logo: {
    width: '100%',
  },
});
