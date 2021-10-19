import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../../CustomHeader';

const SettingScreenDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting Screen Detail!</Text>
        <TouchableOpacity>
          <Text>Go to Home detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreenDetail;
