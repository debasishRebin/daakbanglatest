import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {IMG} from '../../../constants/Image';
import {utils} from '../../../globalStyles/utils';

const {width, height} = Dimensions.get('screen');

export class LoginFooter extends PureComponent {
  render() {
    return (
      <View style={styles.loginFooter}>
        <View style={[styles.footerLogo, utils.sh100]}>
          <Image
            style={[utils.sh100, styles.daakbanglaLogo]}
            source={IMG.IMAGE_FOOTER_LOGO}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.connect, utils.center]}>
          <Text style={[styles.connectText, utils.fPrimaryColor]}>
            Connect with Us
          </Text>
        </View>
        <View style={styles.footerSocialContainer}>
          <View style={[styles.socialItem]}>
            <Image
              style={[utils.sh100]}
              source={IMG.IMAGE_LOGIN_FACEBOOK}
              resizeMode="contain"
            />
          </View>
          <View style={[styles.socialItem]}>
            <Image
              style={[utils.sh100]}
              source={IMG.IMAGE_LOGIN_YOUTUBE}
              resizeMode="contain"
            />
          </View>
          <View style={[styles.socialItem]}>
            <Image
              style={[utils.sh100]}
              source={IMG.IMAGE_LOGIN_INSTAGRAM}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginFooter;

const styles = StyleSheet.create({
  loginFooter: {
    height: '100%',
    justifyContent: 'space-between',
  },
  footerLogo: {
    flex: 1.2,
  },
  footerSocialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1.2,
  },

  socialItem: {
    width: '25%',
    height: '100%',
  },
  connect: {
    flex: 0.5,
  },
  connectText: {
    fontFamily: 'kalpurush',
    fontSize: width / 28,
  },
});
