//  <SafeAreaView style={styles.container}>
//   {/* <Test onPress={handlePress} /> */}
//   <View
//     style={{
//       backgroundColor: 'dodgerblue',
//       width: '100%',
//       height: landscape ? '100%' : '30%'
//     }}
//   ></View>
//   <StatusBar style="auto" />
// </SafeAreaView>;

// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   SafeAreaView,
//   Image,
//   Platform,
//   StatusBar as AndroidBar,
//   Dimensions
// } from 'react-native';
// import {
//   useDimensions,
//   useDeviceOrientation
// } from '@react-native-community/hooks';

// import Test from './components/Test';

// export default function App() {
//   const handlePress = () => {
//     console.log('Image pressed');
//   };

//   // console.log('====================================');
//   // const { landscape } = useDeviceOrientation();
//   // console.log('====================================');

//   const demoImage = require('./assets/favicon.png');

//   return (
//     <View
//       style={{
//         backgroundColor: 'white',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center'
//         //alignContent: 'center',
//         //flexWrap: 'wrap'
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: 'dodgerblue',
//           width: 100,
//           //flex: -1,
//           height: 100
//           //flexBasis: 400,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: 'gold',
//           width: 100,
//           height: 100,
//           top: 20,
//           left: 20,
//           position: 'absolute'
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: 'tomato',
//           width: 100,
//           height: 100
//         }}
//       />
//       {/* <View
//         style={{
//           backgroundColor: 'grey',
//           width: 100,
//           height: 100
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: 'greenyellow',
//           width: 100,
//           height: 100
//         }}
//       /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     paddingTop: Platform.OS === 'android' ? AndroidBar.currentHeight : 0
//   },
//   text: {
//     fontSize: 30
//   }
// });
