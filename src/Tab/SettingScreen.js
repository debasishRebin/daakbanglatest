import React from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../CustomHeader';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Setting" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting!</Text>
        <TouchableOpacity
          style={{backgroundColor: '#CEE5D0', padding: 20, borderRadius: 5}}
          onPress={() => navigation.navigate('SettingDetail')}>
          <Text>Go to Setting detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
