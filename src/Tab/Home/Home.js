import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import CustomHeader from '../../../CustomHeader';
import Dekhashona from '../../components/Home/Dekhashona/Dekhashona';
import Sampratik from '../../components/Home/Sampratik/Sampratik';
import UpperTabbar from '../../components/Sidebar/UpperTabbar/UpperTabbar';

const Home = ({navigation}) => {
  const route = useRoute();
  console.log(route.name);
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title=""
        isHome={true}
        navigation={navigation}
        route={route}
      />
      <FlatList
        data={[]}
        overScrollMode="never"
        ListEmptyComponent={null}
        keyExtractor={() => 'product'}
        renderItem={null}
        ListHeaderComponent={() => (
          <React.Fragment>
            <Sampratik />
            <View>
              <Dekhashona />
            </View>
          </React.Fragment>
        )}
      />
      <View>
        <UpperTabbar />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
