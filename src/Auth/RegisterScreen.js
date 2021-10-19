import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{backgroundColor: '#FF5C58', padding: 20, borderRadius: 5}}
          onPress={() => navigation.navigate('Login')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
