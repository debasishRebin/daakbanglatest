import React from 'react';
import {IMG} from '../../../../constants/Image';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {utils} from '../../../../globalStyles/utils';

const {width, height} = Dimensions.get('screen');

const BtnPrimary = ({btnTitle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.customButtonContainer, utils.sh100]}
      activeOpacity={0.8}>
      <Text style={[styles.btnTitleText, utils.fFamily]}>{btnTitle}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.btnImage]}
          source={IMG.IMAGE_BUTTON}
          resizeMode="stretch"
        />
      </View>
    </TouchableOpacity>
  );
};

export default BtnPrimary;

const styles = StyleSheet.create({
  customButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    borderRadius: 6,
    overflow: 'hidden',
  },
  btnImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  btnTitleText: {
    color: '#fff',
  },
});
