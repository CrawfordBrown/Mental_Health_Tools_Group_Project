import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

//const image = {};


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require("./assets/flower1.png")} style={styles.image}>
    </ImageBackground>
    <Button
        title="Start"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
  </View>
  
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
    borderRadius: 10,
  },
});


export default App;
