import React, { useReducer } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_name':
            return { ...state, name: action.payload };
        case 'change_password':
            return action.payload.length > 5
                ? { ...state, password: action.payload, error: true }
                : { ...state, password: action.payload, error: false };
        default:
            return state;
    }
}

const EnterNameScreen = () => {
	const [state, dispatch] = useReducer(reducer, { name: '', password: '' });

	return (<View>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
            value={state.name}
            onChangeText={(input) => (dispatch({ type: 'change_name', payload: input }))} />
        {state.name ? <Text>My name is {state.name}</Text> : null}
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry={true}
            placeholder="Password"
            value={state.password}
            onChangeText={(input) => (dispatch({ type: 'change_password', payload: input }))} />
        {state.error ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>);
};

const styles = StyleSheet.create({
    textInput: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default EnterNameScreen;
