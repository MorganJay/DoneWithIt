import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

import colors from '../config/colors';

const background = require('../assets/background.jpg');
const logo = require('../assets/logo-red.png');

const WelcomeScreen = () => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  header: {
    alignItems: 'center',
    position: 'absolute',
    top: 70
  },
  loginButton: {
    backgroundColor: colors.primary,
    height: 70,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  registerButton: {
    backgroundColor: colors.secondary,
    height: 70,
    width: '100%'
  }
});

export default WelcomeScreen;
