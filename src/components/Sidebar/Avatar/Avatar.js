import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {IMG} from '../../../constants/Image';
import {utils} from '../../../globalStyles/utils';

const {width, height} = Dimensions.get('window');

export class Avatar extends PureComponent {
  render() {
    return (
      <View style={[styles.subContainer, utils.h100]}>
        <View style={[styles.avatarIcon]}>
          <Image source={IMG.IMAGE_AVATAR} style={utils.sh100} />
        </View>
        <View style={styles.profileContainer}>
          <Text style={[styles.avatarText, utils.fDarkColor, utils.fFamily]}>
            অর্ণব নন্দী
          </Text>
          <View style={styles.info}>
            <Text style={[styles.phoneNoText, utils.fDarkColor, utils.fFamily]}>
              +91 7044 200115
            </Text>
          </View>
        </View>
        <View style={styles.imageBorder}>
          <View style={styles.imgBorderIcon}>
            <Image source={IMG.IMAGE_BORDER} style={utils.sh100} />
          </View>
        </View>
      </View>
    );
  }
}

export default Avatar;

const styles = StyleSheet.create({
  subContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  avatarText: {
    color: '#828282',
    fontSize: width / 20,
  },
  avatarIcon: {height: width / 5, width: width / 5, resizeMode: 'contain'},
  phoneIcon: {
    width: width / 35,
    resizeMode: 'contain',
    marginRight: 5,
  },
  phoneNoText: {
    color: '#828282',
    fontSize: width / 33,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width / 25,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 200,
  },
  imgBorderIcon: {
    height: 10,
  },
});
