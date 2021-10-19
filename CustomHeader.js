import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {IMG} from './src/Constants/Image';

const CustomHeader = ({title, isHome, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#fff',
      }}>
      {isHome ? (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
          onPress={() => navigation.openDrawer()}>
          <Image
            style={{
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
            source={IMG.IMAGE_DRAWER_ITEM_MENU}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
            }}
            source={IMG.IMAGE_LEFT_ARROW}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default CustomHeader;
