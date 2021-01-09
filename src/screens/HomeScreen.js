import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (<View>
    <Text style={styles.text}>Hi There!</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"/>
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"/>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    backgroundColor: 'green',
    marginTop: 20,
    paddingVertical: 5
  }
});

export default HomeScreen;
