import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./components/AppNavigator";
export default function App() {
  return (
    <AppNavigator />
    /*<View style={[styles.container, styles.theme]}>
      <Text style = {styles.myText}>HELLO WORLD</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  theme: {
    backgroundColor: 'blue'

  },
  myText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  }
});*/

