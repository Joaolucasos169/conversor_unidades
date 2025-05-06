import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';

interface ThemedTextProps {
  style?: TextStyle;
  type?: 'default' | 'title' | 'subtitle' | 'defaultSemiBold';
  children?: React.ReactNode;
  onPress?: () => void;
}

export const ThemedText: React.FC<ThemedTextProps> = ({ 
  style, 
  type = 'default', 
  children,
  onPress
}) => {
  const textStyles = [
    styles.base,
    type === 'title' && styles.title,
    type === 'subtitle' && styles.subtitle,
    type === 'defaultSemiBold' && styles.defaultSemiBold,
    style
  ];

  return <Text style={textStyles} onPress={onPress}>{children}</Text>;
};

const styles = StyleSheet.create({
  base: {
    color: '#000',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  defaultSemiBold: {
    fontWeight: '600',
  }
});