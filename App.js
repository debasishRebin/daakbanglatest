import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import Navigation from './src/navigation/navigation';

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
