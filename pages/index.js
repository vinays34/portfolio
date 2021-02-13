// @generated: @expo/next-adapter@2.1.55
import Link from 'next/link'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
     <Link href="/home">
     <Text>Home</Text></Link>
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
