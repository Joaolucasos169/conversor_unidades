import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Converter from './components/Converter';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Conversor de Unidades</Text>
      <Converter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2a2a2a',
  },
});