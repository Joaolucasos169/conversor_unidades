import React, { ReactNode } from 'react';
import { View, Text, TextInput, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native';

// Definindo os tipos para as props
interface ThemeProviderProps {
  children: ReactNode;  // Tipagem explícita para children
}

// Componente ThemeProvider com tipagem correta
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <View style={styles.globalContainer}>
      {children}
    </View>
  );
};

// Componente ThemedText com tipagem
interface ThemedTextProps {
  style?: TextStyle;
  children?: ReactNode;
  [key: string]: any;  // Para outras props que possam ser passadas
}

export const ThemedText: React.FC<ThemedTextProps> = ({ style, children, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

// Componente ThemedTextInput com tipagem
interface ThemedTextInputProps extends TextInputProps {
  style?: ViewStyle & TextStyle;
}

export const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      placeholderTextColor="#999"
      {...props}
    />
  );
};

// Estilos
const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  text: {
    color: '#333',
    fontSize: 16,
    marginVertical: 8
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff'
  }
});