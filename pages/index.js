// @generated: @expo/next-adapter@2.1.55
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tools from '../Components/Screens/Tools';
import App from './../App'


export default function AppNext() {
  return (
    <View style={styles.container}>
     <Tools/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
