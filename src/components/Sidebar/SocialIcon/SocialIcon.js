import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IMG} from '../../../constants/Image';
import {sideBarSocial} from '../../../data/sidebar/sidebar';
import {utils} from '../../../globalStyles/utils';

const {width} = Dimensions.get('window');

export class SocialIcon extends PureComponent {
  render() {
    return (
      <View style={[styles.socialIcon, utils.sh100]}>
        <View style={styles.socialIconWrapper}>
          <View style={styles.socialIconContainer}>
            {sideBarSocial.map((item, index) => (
              <TouchableOpacity key={index} style={styles.social}>
                <Image
                  source={item.img}
                  style={[styles.socialImg]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.copyWright}>
            <View style={styles.copyWrightSection}>
              <Image
                source={IMG.IMAGE_COPYRIGHT}
                style={[styles.copyWrightIcon]}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.copyWrightText,
                utils.fPrimaryColor,
                utils.fFamily,
              ]}>
              &
            </Text>
            <View style={[styles.copyWrightSection, {marginLeft: 4}]}>
              <Image
                source={IMG.IMAGE_ROYALTY}
                style={[styles.copyWrightIcon]}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.copyWrightText,
                utils.fPrimaryColor,
                utils.fFamily,
              ]}>
              by Daak Bangla, 2021
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SocialIcon;

const styles = StyleSheet.create({
  socialIconContainer: {
    flexDirection: 'row',
  },
  socialIcon: {
    paddingLeft: 30,
  },
  social: {
    width: '25%',
    height: width / 10,
  },
  socialImg: {
    width: '65%',
  },
  copyWright: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyWrightSection: {
    width: width / 30,
    marginRight: 4,
  },
  copyWrightIcon: {
    width: '100%',
    resizeMode: 'contain',
  },
  copyWrightText: {
    fontSize: width / 34,
  },
  socialIconWrapper: {
    width: '70%',
  },
});
