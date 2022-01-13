import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  function handleNumber() {
    const new_number = Math.floor(Math.random() * 60);

    setNumber(new_number);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.number}>{number}</Text>
      <TouchableOpacity onPress={handleNumber} style={style.button}>
        <Text style={style.textNumber}>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#4A148C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 70,
    color: '#00C853',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textNumber: {
    fontSize: 24,
    color: '#00C853',
    fontWeight: 'bold',
  },
});
