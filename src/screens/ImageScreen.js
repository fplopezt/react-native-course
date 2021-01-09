import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = ({ navigation }) => {
  return (<View>
      <ImageDetail title="Forest" img={require('../../assets/forest.jpg')} score={5}/>
      <ImageDetail title="Mountain" img={require('../../assets/mountain.jpg')} score={6}/>
      <ImageDetail title="Beach" img={require('../../assets/beach.jpg')} score={7}/>
      <ImageDetail title="River" img={require('../../assets/beach.jpg')} score={8}/>
  </View>);
};

const styles = StyleSheet.create({
});

export default ImageScreen;
