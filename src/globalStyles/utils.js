import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const utils = StyleSheet.create({
  mhOne: {
    marginHorizontal: width / 20,
  },
  mhTwo: {
    marginHorizontal: height / 25,
  },
  mhThree: {
    marginHorizontal: height / 30,
  },
  fFamily: {
    fontFamily: 'kalpurush',
  },
  fsOne: {
    marginHorizontal: width / 25,
  },
  fsTwo: {
    marginHorizontal: width / 27,
  },
  fsThree: {
    marginHorizontal: width / 28,
  },
  fsFour: {
    marginHorizontal: width / 29,
  },
  fsFive: {
    marginHorizontal: width / 30,
  },
  fsSix: {
    marginHorizontal: width / 35,
  },
  phOne: {
    paddingHorizontal: width / 15,
  },
  phTwo: {
    paddingHorizontal: height / 30,
  },
  fontLight: {
    color: '#8f5a4d',
  },
  fDarkColor: {
    color: '#4a4a4a',
  },
  fPrimaryColor: {
    color: '#895143',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  s100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  sh100: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    marginHorizontal: width / 13,
    // borderWidth: 1,
  },
  wrapperLeft: {
    marginLeft: width / 13,
  },
  titleColor: {
    color: '#4f0e0e',
  },
});
