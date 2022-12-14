import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../../styles/colors';
import global from '../../utility/global';
import constants from '../../utility/constants';
import {launchImageLibrary} from 'react-native-image-picker';
import fonts from '../../utility/fonts';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';

export default function SignupDoctor2(props) {
  useEffect(() => {
    props.navigation.setOptions({
      header: () => (
        <Header showBackButton={true} navigation={props.navigation} title="Confirm"/>
      ),
    });
  }, []);

  const [image, setImage] = useState(null);
  const handleImagePicker = () => {
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      let files = response.assets;
      if (files) {
        setImage(files[0].uri);
      }
    });
  };

  const handleSubmit = () => {
    props.navigation.navigate('EnterOtp');
  };

  return (
    <View style={[styles.styleFull, {padding: 22}]}>
      <View style={{marginVertical: 5}}>
        <Text style={internalStyles.title}>
          Upload Your Passing Certificate
        </Text>
      </View>
      {image ? (
        <View style={internalStyles.imageBox}>
          <Image source={{uri: image}} style={internalStyles.image} />
          <Ripple
            style={internalStyles.inImageUploadIcon}
            onPress={handleImagePicker}>
            {global.drawIcon(constants.IC_FEATHER, 'camera', 20, colors.WHITE)}
          </Ripple>
        </View>
      ) : (
        <View style={internalStyles.uploadImageBox}>
          <Ripple style={internalStyles.uploadIcon} onPress={handleImagePicker}>
            {global.drawIcon(
              constants.IC_FEATHER,
              'camera',
              34,
              colors.PRIMARY,
            )}
          </Ripple>
        </View>
      )}
      <PrimaryButton
        title="Submit"
        onPress={handleSubmit}
        style={{width: '100%'}}
      />
    </View>
  );
}

const internalStyles = StyleSheet.create({
  title: {
    fontSize: fonts._13,
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  uploadImageBox: {
    height: 500,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadImageTitle: {
    fontSize: fonts._13,
    fontFamily: fonts.FONT_FAMILY.Medium,
    color: '#828282',
  },
  uploadIcon: {
    marginTop: 9,
  },
  imageBox: {
    height: 500,
  },
  image: {
    flex: 1,
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  inImageUploadIcon: {
    position: 'absolute',
    right: 10,
    bottom: 6,
  },
});
