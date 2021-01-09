import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ImageDetail = ({img, title, score}) => {
  return (<View>
    <Image source={img}/>
    <Text>{title} - Score: {score}</Text>
  </View>);
};

const styles = StyleSheet.create({
});

export default ImageDetail;
