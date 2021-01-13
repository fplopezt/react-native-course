import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FlexScreen = () => {
	return (<View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
	</View>);
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 500,
        alignItems: 'center'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        position: 'absolute',
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2
    }
});

export default FlexScreen;
