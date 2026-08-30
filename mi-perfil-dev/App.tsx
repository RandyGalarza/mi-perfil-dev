import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

export default function App() {
  // Estado para almacenar la cantidad de likes
  const [likes, setLikes] = useState<number>(0);

  // Función para aumentar los likes
  const darLike = () => {
    setLikes(likes + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.card}>

        {/* Avatar */}
        <Image
          source={require('./assets/show.png')}
          style={styles.avatar}
        />

        {/* Nombre */}
        <Text style={styles.nombre}>
          Randy David Galarza Vanegas
        </Text>

        {/* Carrera */}
        <Text style={styles.carrera}>
          Ingeniería de Sistemas
        </Text>

        <View style={styles.linea} />

        {/* Biografía */}
        <Text style={styles.titulo}>
          Sobre mí
        </Text>

        <Text style={styles.biografia}>
          Soy estudiante de Ingeniería de Sistemas, apasionado por la
          tecnología, el desarrollo de software y la innovación. Me interesa
          aprender nuevas herramientas y adquirir conocimientos que me
          permitan crear soluciones tecnológicas útiles y eficientes.
        </Text>

        {/* Información */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitulo}>
             Formación
          </Text>

          <Text style={styles.infoTexto}>
            Estudiante de Ingeniería de Sistemas
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitulo}>
             Intereses
          </Text>

          <Text style={styles.infoTexto}>
            Desarrollo de software, Videojuegos, Animes
          </Text>
        </View>

        {/* Contador de likes */}
        <View style={styles.reacciones}>

          <Text style={styles.likesTexto}>
            ❤️ {likes} {likes === 1 ? 'Like' : 'Likes'}
          </Text>

          <Pressable
            onPress={darLike}
            style={({ pressed }) => [
              styles.botonLike,
              pressed && styles.botonPresionado,
            ]}
          >
            <Text style={styles.botonTexto}>
               Me gusta
            </Text>
          </Pressable>

        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f5f9',
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 18,
    borderWidth: 4,
    borderColor: '#4f46e5',
  },

  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 8,
  },

  carrera: {
    fontSize: 17,
    color: '#4f46e5',
    fontWeight: '600',
    textAlign: 'center',
  },

  linea: {
    width: '80%',
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 22,
  },

  titulo: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },

  biografia: {
    width: '100%',
    fontSize: 15,
    lineHeight: 24,
    color: '#6b7280',
    textAlign: 'justify',
    marginBottom: 20,
  },

  infoBox: {
    width: '100%',
    backgroundColor: '#f8fafc',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },

  infoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 5,
  },

  infoTexto: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },

  reacciones: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },

  likesTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 15,
  },

  botonLike: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },

  botonPresionado: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },

  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});