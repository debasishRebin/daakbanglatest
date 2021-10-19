import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import CustomHeader from '../../CustomHeader';

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Notification" navigation={navigation} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: '#CEE5D0', padding: 20, borderRadius: 5}}
          onPress={() => navigation.goBack()}>
          <Text>Go Back To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationsScreen;
