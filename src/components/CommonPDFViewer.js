import React from 'react';
import {Modal, Text, View, StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors';
import Pdf from 'react-native-pdf';
import global from '../utility/global';

export default function CommonPDFViewer({navigation}) {
  const url = navigation.getParam('url', null);
  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: url,
          cache: true,
        }}
        renderActivityIndicator={() => {
          global.getLoader();
        }}
        onError={error => {
          console.log('error', error);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 10,
    backgroundColor: colors.BLACK,
    padding: 10,
    borderRadius: 5,
  },
});
