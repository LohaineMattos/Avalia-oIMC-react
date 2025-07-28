import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum) {
      setResultado('Por favor, preencha peso e altura corretamente.');
      return;
    }

    const imc = (pesoNum / (alturaNum * alturaNum));
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau II';
    } else {
      classificacao = 'Obesidade grau III';
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} e você está classificado como ${classificacao}.`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.title}>Calculadora de IMC</Text>

        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          placeholderTextColor="#1c1e22ff"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura (m)"
          placeholderTextColor="#1c1e22ff"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>

        {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a2a43ff',
    justifyContent: 'center',
    alignItems: 'center', // Adicione esta linha
  },
  innerContainer: {
    flex: 1, // Adicione esta linha
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Garante que os inputs ocupem toda a largura disponível
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F9F7F7',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#ffffffff',
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#1e96f2ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F9F7F7',
    fontSize: 18,
    fontWeight: '600',
  },
  resultado: {
    marginTop: 25,
    fontSize: 18,
    color: '#F9F7F7',
    textAlign: 'center',
  },
});