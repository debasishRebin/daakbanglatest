import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {IMG} from './src/Constants/Image';

const CustomDrawerContent = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={IMG.IMAGE_PROFILE} style={{height: 120, width: 120}} />
      </View>
      <ScrollView>
        <TouchableOpacity
          style={{marginTop: 20, marginLeft: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Text>Menu Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20, marginLeft: 20}}
          onPress={() => props.navigation.navigate('Notifications')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
