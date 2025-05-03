
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Converter = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('cm');
  const [result, setResult] = useState(null);

  const units = [
    { label: 'Centímetros (cm)', value: 'cm' },
    { label: 'Metros (m)', value: 'm' },
    { label: 'Quilômetros (km)', value: 'km' },
    { label: 'Milhas (mi)', value: 'mi' },
  ];

  const convert = async () => {
    if (!value) {
      Alert.alert('Erro', 'Digite um valor para converter');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.6:3000/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value, fromUnit, toUnit }),
      });

      const data = await response.json();

      if (data.error) {
        Alert.alert('Erro', data.error);
      } else {
        setResult(data.result);
      }
    } catch (error) {
      Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Unidades</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor"
        value={value}
        onChangeText={setValue}
      />

      <Text style={styles.label}>De:</Text>
      <Picker
        selectedValue={fromUnit}
        style={styles.picker}
        onValueChange={setFromUnit}>
        {units.map((unit) => (
          <Picker.Item key={unit.value} label={unit.label} value={unit.value} />
        ))}
      </Picker>

      <Text style={styles.label}>Para:</Text>
      <Picker
        selectedValue={toUnit}
        style={styles.picker}
        onValueChange={setToUnit}>
        {units.map((unit) => (
          <Picker.Item key={unit.value} label={unit.label} value={unit.value} />
        ))}
      </Picker>

      <Button title="Converter" onPress={convert} color="#6200ee" />

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {value} {fromUnit} = {result} {toUnit}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resultContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#1976d2',
    fontWeight: 'bold',
  },
});

export default Converter;