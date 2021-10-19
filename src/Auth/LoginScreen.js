import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#CEE5D0',
            padding: 20,
            borderRadius: 5,
            marginBottom: 5,
          }}
          onPress={() => navigation.navigate('DrawerNavigator')}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: '#FF5C58', padding: 20, borderRadius: 5}}
          onPress={() => navigation.navigate('Register')}>
          <Text>New here ? Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
