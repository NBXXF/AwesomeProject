import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Text>这是main</Text>;
    }
}

function select(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
    }
}

export default connect(select)(Main);