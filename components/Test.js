import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  TouchableNativeFeedback,
  Image,
  StyleSheet
} from 'react-native';

const Test = ({ onPress }) => {
  return (
    <>
      <Text style={styles.text} numberOfLines={1}>
        Hello React Native!
      </Text>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={{ width: 200, height: 50, backgroundColor: 'dodgerblue' }}>
          <Text>I am a view</Text>
        </View>
      </TouchableNativeFeedback>
      <Image
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'
        }}
      />
      <Button
        color="orange"
        title="Tap!! me"
        onPress={() =>
          //Alert.prompt('My Title', 'My message prompt', text => alert(text))
          Alert.alert(
            'My Title',
            'My Message from Button',
            [
              { text: 'Yes', onPress: () => alert('yes') },
              { text: 'No', onPress: () => alert('No') }
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  'This alert was dismissed by tapping outside the alert dialog.'
                )
            }
          )
        }
      />
    </>
  );
};

export default Test;

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});
