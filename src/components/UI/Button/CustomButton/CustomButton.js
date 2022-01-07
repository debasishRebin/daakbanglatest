import React from 'react';
import {IMG} from '../../../../constants/Image';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const CustomButton = ({btnTitle}) => {
  return (
    <TouchableOpacity style={styles.customButtonContainer}>
      <Text style={styles.btnTitleText}>{btnTitle}</Text>
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

export default CustomButton;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  btnImage: {},
  btnTitleText: {
    position: 'relative',
  },
});
