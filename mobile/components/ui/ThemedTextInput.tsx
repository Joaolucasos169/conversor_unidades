import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface ThemedTextInputProps extends TextInputProps {
  style?: any;
}

export const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#999"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
});