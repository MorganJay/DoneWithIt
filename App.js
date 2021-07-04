import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  SafeAreaView,
  Image,
  Platform,
  StatusBar as AndroidBar,
  Dimensions
} from 'react-native';
import {
  useDimensions,
  useDeviceOrientation
} from '@react-native-community/hooks';

import Test from './components/Test';

export default function App() {
  const handlePress = () => {
    console.log('Image pressed');
  };

  // console.log('====================================');
  // const { landscape } = useDeviceOrientation();
  // console.log('====================================');

  const demoImage = require('./assets/favicon.png');

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 2
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          flex: 1
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Platform.OS === 'android' ? AndroidBar.currentHeight : 0
  },
  text: {
    fontSize: 30
  }
});
