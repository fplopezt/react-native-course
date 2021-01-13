import React from 'react';
import { StyleSheet, View } from 'react-native';

const FlexExampleScreen = () => {
	return (<View>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>
	</View>);
};

const styles = StyleSheet.create({
    viewOneStyle: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,.2)',
        position: 'absolute'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,.2)',
        position: 'absolute',
        right: 0
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'green',
        backgroundColor: 'rgba(0,255,0,.2)',
        alignSelf: 'center',
        top: 100
    }
});

export default FlexExampleScreen;
