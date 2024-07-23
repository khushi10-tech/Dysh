import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Welcome= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


