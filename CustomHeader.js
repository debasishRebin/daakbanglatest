import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {IMG} from './src/constants/Image';
import {utils} from './src/globalStyles/utils';

const {width, height} = Dimensions.get('window');

const CustomHeader = ({title, isHome, navigation}) => {
  return (
    <View style={styles.customHeader}>
      <View style={styles.headerBg}>
        <Image
          style={[utils.sh100]}
          source={IMG.IMAGE_HOME_HEADER_BG}
          resizeMode="contain"
        />
      </View>
      {isHome ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.openDrawer()}>
          <Image
            style={[styles.hamburgerIcon]}
            source={IMG.IMAGE_HAMBURGER}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.right}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.goBackIcon}
            source={IMG.IMAGE_LEFT_ARROW}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      <View style={styles.middle}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.userBox}>
          <TouchableOpacity style={styles.leftIcon}>
            <Image
              style={[utils.sh100]}
              source={IMG.IMAGE_USER}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftIcon}>
            <Image
              style={[utils.sh100]}
              source={IMG.IMAGE_LETTER_BOX}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    position: 'relative',
    height: 50,
    backgroundColor: '#fff',
    height: height / 4.8,
    width: '100%',
  },
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  left: {
    flex: 0.5,
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingTop: 10,
  },
  goBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburgerIcon: {
    width: width / 25,
    height: width / 25,
    marginLeft: 10,
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 0.5,
  },
  userBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingRight: width / 30,
  },
  leftIcon: {
    width: width / 25,
    height: width / 25,
    marginHorizontal: 5,
    marginVertical: 15,
  },
});
