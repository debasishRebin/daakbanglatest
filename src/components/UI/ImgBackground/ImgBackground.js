import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {IMG} from '../../../constants/Image';

const {width} = Dimensions.get('window');

const ImgBackground = ({children}) => {
  return (
    <View style={styles.authBgContainer}>
      <View style={styles.authBgImgContainer}>
        <Image source={IMG.IMAGE_LOGIN_BG} style={styles.bgImage} />
      </View>
      <View style={styles.appLogoContainer}>
        <Image source={IMG.ELECTRICO_LOGO} style={styles.appLogo} />
      </View>
      {children}
    </View>
  );
};

export default ImgBackground;

const styles = StyleSheet.create({
  authBgContainer: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authBgImgContainer: {
    width: '100%',
    height: '100%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  appLogoContainer: {
    width: width / 2.5,
    position: 'absolute',
    top: 0,
  },
  appLogo: {
    width: '100%',
    height: width / 2.5,
    resizeMode: 'contain',
  },
});
