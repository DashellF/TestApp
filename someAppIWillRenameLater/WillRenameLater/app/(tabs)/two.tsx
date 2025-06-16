import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THIS IS A SECOND TAB ERNEST WOOHOO</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>some image I found:</Text>
      <Image source={require('../../assets/images/winnieThePooh.webp')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
    marginTop: 20,
  },
});