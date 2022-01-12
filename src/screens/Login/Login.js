import React, {createRef, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import LoginFooter from '../../components/Login/LoginFooter/LoginFooter';
import BtnPrimary from '../../components/UI/Button/BtnPrimary/BtnPrimary';
import OutlineInput from '../../components/UI/Input/OutlineInput/OutlineInput';
import {IMG} from '../../constants/Image';
import {utils} from '../../globalStyles/utils';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [savePassword, setSavePassword] = useState(false);
  const passwordInputRef = createRef();

  const onResend = () => {
    ('hello');
  };

  const onLogin = () => {
    navigation.replace('DrawerNavigator');
  };

  return (
    <ImageBackground source={IMG.IMAGE_LOGIN_BG} style={styles.loginBg}>
      <KeyboardAvoidingView
        style={styles.loginContainer}
        keyboardVerticalOffset={-200}>
        <View style={styles.loginHeader}>
          <Text style={[styles.headerText, utils.fFamily, utils.fontLight]}>
            স্বাগতম
          </Text>
          <Text style={[styles.loginBodyText, utils.fFamily, utils.fontLight]}>
            নিজের একাউন্ট এ লগইন করুন
          </Text>
        </View>

        <View style={styles.loginInputContainer}>
          <OutlineInput
            placeholder="মোবাইল নম্বর / ইমেইল"
            placeholderTextColor="#895143"
            selectionColor="#895143"
            keyboardType="number-pad"
            value={mobileNumber}
            maxLength={10}
            onChangeText={e => setMobileNumber(e)}
            secureTextEntry={false}
            IMG={IMG.IMAGE_MOBILE_ICON}
            passwordIcon={false}
          />
          <OutlineInput
            placeholder="পাসওয়ার্ড"
            placeholderTextColor="#895143"
            selectionColor="#895143"
            keyboardType="default"
            value={password}
            maxLength={10}
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
            passwordIcon={IMG.IMAGE_HIDE_PASSWORD}
            IMG={IMG.IMAGE_PASSWORD}
          />
          <View style={styles.loginBtnContainer}>
            <BtnPrimary btnTitle="লগইন / রেজিস্টার" onPress={onLogin} />
          </View>
          <View style={[styles.togglePassword, utils.between]}>
            <TouchableOpacity
              style={[styles.savePasswordContainer, utils.between]}>
              <TouchableOpacity
                style={[styles.passwordItem]}
                onPress={() => setSavePassword(!savePassword)}>
                <View style={styles.checkContainer}>
                  {savePassword ? (
                    <Image
                      style={[utils.sh100, styles.check]}
                      source={IMG.IMAGE_CHECK}
                      resizeMode="contain"
                    />
                  ) : (
                    <View style={styles.unCheck}>
                      <Image
                        style={[utils.sh100]}
                        source={IMG.IMAGE_UNCHECK}
                        resizeMode="contain"
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
              <Text style={[utils.fFamily, styles.toggleText]}>
                সেভ পাসওয়ার্ড
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.resetPasswordContainer, utils.between]}>
              <View style={[styles.passwordItem]}>
                <Image
                  style={[utils.sh100, styles.savePassword]}
                  source={IMG.IMAGE_RESET}
                  resizeMode="contain"
                />
              </View>
              <Text style={[utils.fFamily, styles.toggleText]}>
                পাসওয়ার্ড রিসেট করুন
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.termsAndCondition}>
            <Text style={[styles.termsAndConditionText, utils.fFamily]}>
              By clicking you agree to
              <Text style={styles.termsText}> Terms & Conditions </Text>
            </Text>
          </View>
        </View>
        <View style={styles.loginFooterContainer}>
          <LoginFooter />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  loginContainer: {
    width: width / 1.35,
    alignItems: 'center',
    position: 'relative',
    paddingVertical: height / 6,
    // borderWidth: 1,
  },
  loginHeader: {
    height: width / 5.6,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: width / 8.4,
    letterSpacing: 0.5,
    flex: 4,
    fontWeight: '100',
  },
  loginBodyText: {
    textAlign: 'center',
    fontSize: width / 38,
    flex: 1,
  },
  loginInputContainer: {
    marginTop: width / 20,
    width: '100%',
  },

  //
  termsAndConditionText: {
    color: '#6a7b98',
    fontSize: width / 30,
    marginTop: 10,
  },
  termsText: {
    color: '#6a7b98',
    fontWeight: 'bold',
    fontSize: width / 31,
    marginTop: 10,
  },
  loginBtnContainer: {
    height: width / 12,
    marginTop: 30,
  },

  togglePassword: {
    flexDirection: 'row',
    marginTop: 10,
  },
  savePasswordContainer: {
    flexDirection: 'row',
  },

  passwordItem: {
    width: width / 22,
    height: width / 22,
    marginRight: 8,
  },

  toggleText: {
    fontSize: width / 32,
    color: '#895143',
  },
  termsAndCondition: {
    marginVertical: width / 10,
  },
  termsAndConditionText: {
    textAlign: 'center',
    color: '#895143',
    fontSize: width / 35,
    letterSpacing: 0.1,
  },
  termsText: {
    fontWeight: 'bold',
  },
  loginFooterContainer: {
    width: width / 3,
    marginTop: height / 18,
    height: width / 3,
  },
  resetPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  checkUncheckContainer: {
    borderWidth: 2,
    borderColor: 'red',
  },
  unCheck: {
    width: width / 25,
    height: width / 25,
  },
});
