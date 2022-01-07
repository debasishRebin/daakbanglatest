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

const BtnPrimary = ({btnTitle}) => {
  return (
    <TouchableOpacity style={styles.customButtonContainer} activeOpacity={1}>
      <Text style={[styles.btnTitleText, utils.fFamily]}>{btnTitle}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.btnImage}
          source={IMG.IMAGE_BUTTON}
          resizeMode="contain"
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
    height: '100%',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  btnImage: {
    width: '100%',
    height: '100%',
  },
  btnTitleText: {
    color: '#fff',
  },
});
