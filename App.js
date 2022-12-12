import * as React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Routes from './src/Navigation/Routes';



function App() {
  return (
    <View style = {styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
})


export default App;

