import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomHeader from '../../CustomHeader';
import {useRoute} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const route = useRoute();
  console.log(route.name);
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title="Home"
        isHome={true}
        navigation={navigation}
        route={route}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{backgroundColor: '#CEE5D0', padding: 20, borderRadius: 5}}
          onPress={() => navigation.navigate('HomeDetail')}>
          <Text>Go to Home detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
