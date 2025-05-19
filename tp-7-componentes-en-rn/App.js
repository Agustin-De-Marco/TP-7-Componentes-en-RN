import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, ImageBackground, Pressable, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('');
  const [bgColor, setBgColor] = useState('blue');

  const contactar = () => {
    if (!mensaje.trim()) {
      alert('Mensaje vacío, escribí algo antes de contactar.');
      return;
    }
    alert(`Mensaje enviado, tu mensaje: ${mensaje}`);
    setMensaje('');
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handlePress = () => {
    setBgColor(getRandomColor());
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar backgroundColor="#333" style="light" />
      <ImageBackground source={require('./assets/background.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, borderRadius: 10, width: '90%', maxWidth: 400, alignItems: 'center' }}>

          <Image source={require('./assets/profile.png')} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }} />
          <Text style={{ fontSize: 24, color: '#FFF', textAlign: 'center', marginBottom: 10 }}>Agustín</Text>
          <Text style={{ fontSize: 16, color: '#CCC', textAlign: 'center', marginBottom: 20 }}>Estudiante de ORT | Argentino </Text>

          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
            <Image source={require('./assets/github.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
            <Image source={require('./assets/correo.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
            <Image source={require('./assets/linkedin.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
            <Image source={require('./assets/phone.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
          </View>

          <TextInput
            style={{ backgroundColor: '#444', color: '#FFF', padding: 10, borderRadius: 8, width: '100%', marginBottom: 10 }}
            placeholder="Escribí un mensaje..."
            placeholderTextColor="#b0b0b0"
            value={mensaje}
            onChangeText={setMensaje}
          />

          <TouchableOpacity onPress={contactar} style={{ backgroundColor: '#28A745', padding: 12, borderRadius: 8, alignItems: 'center', width: '100%', marginBottom: 10 }}>
            <Text style={{ color: '#FFF' }}>Contactar</Text>
          </TouchableOpacity>

          <Pressable onPress={handlePress} style={{ backgroundColor: bgColor, padding: 12, borderRadius: 8, alignItems: 'center', width: '100%' }}>
            <Text style={{ color: '#FFF' }}>Ver Portfolio</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}