import React from 'react';
import {ImageBackground, View, StyleSheet, Dimensions} from 'react-native';
import {IMG} from '../../../constants/Image';
import {utils} from '../../../globalStyles/utils';
import Title from '../../UI/Title/Title';
import SampratikCard from '../SampratikCard/SampratikCard';

const {width, height} = Dimensions.get('window');

const Sampratik = () => {
  return (
    <View>
      <View style={[styles.sampratik]}>
        <ImageBackground source={IMG.IMAGE_SAMPRATIK_BG} style={[utils.sh100]}>
          <View style={[utils.wrapper, styles.sampratikCardContainer]}>
            <Title titleOne="সাম্প্রতিক" titleTwo="সাম্প্রতিক লেখা" />
          </View>
          <SampratikCard />
        </ImageBackground>
      </View>
    </View>
  );
};

export default Sampratik;

const styles = StyleSheet.create({
  sampratik: {
    height: width / 1.3,
    width: '100%',
  },
  sampratikCardContainer: {
    marginVertical: 10,
  },
});
