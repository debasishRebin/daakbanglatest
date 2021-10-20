import React, {useEffect} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import {LogBox} from 'react-native';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Reanimated 2']);
  }, []);
  return (
    <Provider store={configureStore}>
      <Navigation />
    </Provider>
  );
}
