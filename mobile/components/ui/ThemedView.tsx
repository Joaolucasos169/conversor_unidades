import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

interface ThemedViewProps {
  style?: ViewStyle;
  children?: React.ReactNode;
}

export const ThemedView: React.FC<ThemedViewProps> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});