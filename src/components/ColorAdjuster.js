import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorAdjuster = ({ color, onIncrease, onDecrease }) => {
  return (<View>
      <Button title={`Increase ${color}`} onPress={() => (onIncrease())} />
      <Button title={`Decrease ${color}`} onPress={() => (onDecrease())} />
  </View>);
};

const styles = StyleSheet.create({
});

export default ColorAdjuster;
