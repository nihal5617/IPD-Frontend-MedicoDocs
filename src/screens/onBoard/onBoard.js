import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../../styles/colors';
import global from '../../utility/global';
import constants from '../../utility/constants';
import fonts from '../../utility/fonts';

export default function onBoard(props){
  console.log(props.navigation);
  return (
    <View style={internalstyles.container}>
      <View style={internalstyles.image_container}>
        <Image
          source={props.route.params.image}
          style={internalstyles.image}
          resizeMode="contain"
        />
      </View>
      <View style={internalstyles.title_container}>
        <Text style={internalstyles.title}>{props.route.params.title}</Text>
      </View>
      <View style={internalstyles.content_container}>
        <Text style={internalstyles.content}>{props.route.params.content}</Text>
      </View>
      <View style={internalstyles.position_container}>
        <Text style={internalstyles.position}>
          {props.route.params.position === 1 && '- • •'}
          {props.route.params.position === 2 && '• - •'}
          {props.route.params.position === 3 && '• • -'}
        </Text>
      </View>
      <View style={internalstyles.button_container}>
        <Ripple
          onPress={() => {
            props.route.params.position === 1 && props.navigation.navigate('OnBoard2');
            props.route.params.position === 2 && props.navigation.navigate('OnBoard3');
            props.route.params.position === 3 && props.navigation.navigate('Login');
          }}
          style={internalstyles.button}>
          <Text style={internalstyles.button_text}>Join The Movement </Text>
          {props.position !== 3 &&
            global.drawIcon(
              constants.IC_MATERIAL,
              'navigate-next',
              25,
              colors.WHITE,
            )}
        </Ripple>
        <Ripple
          style={internalstyles.need_help}
          onPress={() => {
            // props.navigation.navigate('NeedHelp');
          }}>
          <Text style={internalstyles.content}>Need Help?</Text>
        </Ripple>
      </View>
    </View>
  );
};

const internalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 30,
    paddingTop: 0,
  },
  image_container: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // width: 300,
    height: 300,
  },
  title_container: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  content_container: {
    flex: 0.1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.BLACK,
  },
  position_container: {
    flex: 0.025,
    alignItems: 'center',
    justifyContent: 'center',
  },
  position: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  button_container: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  button_text: {
    fontSize: 15,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  need_help: {
    marginTop: 10,
  },
});
