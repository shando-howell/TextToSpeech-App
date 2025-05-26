import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  const handleConvert = () => {
    console.log(text);

    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={text} 
        onChangeText={setText}
        placeholder='Say hello' 
        style={styles.input} 
        multiline 
      />

      <Pressable onPress={handleConvert} style={styles.button}>
        <Text style={styles.buttonText}>Convert to Audio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
