import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CustomHeader from '../../../CustomHeader';
import UpperTabbar from '../../components/Sidebar/UpperTabbar/UpperTabbar';
import Title from '../../components/UI/Title/Title';
import Sampratik from '../../components/Home/Sampratik/Sampratik';

const Home = ({navigation}) => {
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
      <ScrollView>
        <Sampratik />
      </ScrollView>
      <View>
        <UpperTabbar />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
