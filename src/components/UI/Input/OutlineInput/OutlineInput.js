import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {utils} from '../../../../globalStyles/utils';

const {width, height} = Dimensions.get('window');

export default OutlineInput = ({
  IMG,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  placeholderTextColor,
  selectionColor,
  passwordIcon,
}) => {
  const {
    outLineContainer,
    outlineTextInput,
    iconContainer,
    inputIcon,
    passwordHide,
    passwordHideContainer,
  } = styles;
  return (
    <View style={outLineContainer}>
      <View style={iconContainer}>
        <Image source={IMG} style={inputIcon} />
      </View>
      <TextInput
        style={[outlineTextInput, utils.fFamily]}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        keyboardType={keyboardType}
        value={value}
        maxLength={10}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {passwordIcon && (
        <TouchableOpacity style={passwordHide}>
          <Image source={passwordIcon} style={passwordHideContainer} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outLineContainer: {
    position: 'relative',
    padding: 2,
    width: '100%',
    borderBottomColor: '#8f5a4d',
    borderBottomWidth: 2.5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outlineTextInput: {
    width: '100%',
    fontFamily: 'kalpurush',
    fontSize: width / 25,
    color: '#895143',
    marginLeft: 1,
    height: width / 9,
  },
  iconContainer: {
    justifyContent: 'center',
    width: 30,
  },
  inputIcon: {
    height: height / 24,
    resizeMode: 'contain',
  },
  passwordHide: {
    position: 'absolute',
    right: 0,
    bottom: 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
  },
  passwordHideContainer: {
    resizeMode: 'contain',
    width: width / 22,
  },
});
