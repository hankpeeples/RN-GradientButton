import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GradientButton from './GradientButton';

export default function App() {
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gradient Button IconRight Large</Text>
      <GradientButton
        style={styles.bStyle}
        containerStyle={styles.containerStyle}
        labelStyle={styles.largeButtonLabel}
        label='Press Me'
        size='lg'
        color1='#00ff01'
        color2='#ea17ff'
        color3='#17f4ff'
        iconRight
        iconSize={30}
        iconColor='black'
        disabled={disabled}
      />
      <Text style={styles.text}>Gradient Button IconLeft Medium</Text>
      <GradientButton
        style={styles.bStyle}
        containerStyle={styles.containerStyle}
        labelStyle={styles.buttonLabel}
        label='Press Me'
        size='md'
        color1='#264ef2'
        color2='#7f36e9'
        iconLeft
        iconName='access-point'
        iconSize={24}
        iconColor='white'
        onPress={() => setDisabled(!disabled)}
      />
      <Text style={styles.text}>Disabled Gradient Button Small</Text>
      <GradientButton
        style={styles.bStyle}
        containerStyle={styles.containerStyle}
        labelStyle={styles.buttonLabel}
        label='Press Me'
        size='sm'
        disabled
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  containerStyle: {
    marginBottom: 10
  },
  bStyle: {},
  buttonLabel: {},
  largeButtonLabel: {
    color: 'black'
  },
  text: {
    alignSelf: 'center',
    marginTop: 15
  }
});
