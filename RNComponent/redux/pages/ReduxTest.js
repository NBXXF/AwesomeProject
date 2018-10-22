import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';

const INCREMENT = "increment";
const DECREMENT = "decrement";

function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);
store.subscribe(() => {
    console.log(store.state);
});

store.dispatch({type: INCREMENT});

store.dispatch({type: DECREMENT});

export default class ReduxTest extends Component {
    constructor(props) {
        super(props)
        store.dispatch({type: INCREMENT});
    }

    render() {
        return <View></View>
    }
}

