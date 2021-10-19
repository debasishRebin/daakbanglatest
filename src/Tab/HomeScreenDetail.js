import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import CustomHeader from '../../CustomHeader';

const HomeScreenDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen Detail!</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenDetail;
