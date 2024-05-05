import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Janisar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
     // Adjust as needed
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:"sanserif",
    color: '#333',
    // backgroundColor: "aqua",
    // Adjust as needed
  },
});

export default App;
