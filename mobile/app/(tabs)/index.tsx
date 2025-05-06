import React, { useState } from 'react';
import { StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ui/ThemedView';
import { ThemedText } from '@/components/ui/ThemedText';
import { ThemedTextInput } from '@/components/ui/ThemedTextInput';
import { Picker } from '@react-native-picker/picker';

type UnitType = 'cm' | 'm' | 'km' | 'mi';

export default function HomeScreen() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<UnitType>('m');
  const [toUnit, setToUnit] = useState<UnitType>('km');

  const units = [
    { label: 'Centímetros (cm)', value: 'cm' as UnitType },
    { label: 'Metros (m)', value: 'm' as UnitType },
    { label: 'Quilômetros (km)', value: 'km' as UnitType },
    { label: 'Milhas (mi)', value: 'mi' as UnitType }
  ];

  const factors: Record<UnitType, number> = {
    cm: 0.01,
    m: 1,
    km: 1000,
    mi: 1609.34
  };

  const convert = () => {
    if (!value) {
      Alert.alert('Erro', 'Digite um valor para converter');
      return;
    }

    const result = (parseFloat(value) * factors[fromUnit]) / factors[toUnit];
    Alert.alert('Resultado', `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Conversor de Unidades
      </ThemedText>

      <ThemedTextInput
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />

      <ThemedText style={styles.label}>De:</ThemedText>
      <Picker
        selectedValue={fromUnit}
        style={styles.picker}
        onValueChange={(itemValue) => setFromUnit(itemValue as UnitType)}>
        {units.map(unit => (
          <Picker.Item key={`from-${unit.value}`} label={unit.label} value={unit.value} />
        ))}
      </Picker>

      <ThemedText style={styles.label}>Para:</ThemedText>
      <Picker
        selectedValue={toUnit}
        style={styles.picker}
        onValueChange={(itemValue) => setToUnit(itemValue as UnitType)}>
        {units.map(unit => (
          <Picker.Item key={`to-${unit.value}`} label={unit.label} value={unit.value} />
        ))}
      </Picker>

      <TouchableOpacity 
        style={styles.button}
        onPress={convert}
      >
        <ThemedText style={styles.buttonText}>
          Converter
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    color: '#2c3e50',
  },
  input: {
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#dfe6e9',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#34495e',
  },
  picker: {
    height: 50,
    marginBottom: 25,
    width: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});