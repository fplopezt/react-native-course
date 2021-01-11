import React, { useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_counter':
            return { ...state, counter: state.counter + action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (<View>
        <Button title="Increase" onPress={() => (dispatch({ type: 'change_counter', payload: 1 }))}></Button>
        <Button title="Decrease" onPress={() => (dispatch({ type: 'change_counter', payload: -1 }))}></Button>
        <Text>Current count: {state.counter}</Text>
    </View>);
};

const styles = StyleSheet.create({
});

export default CounterScreen;
