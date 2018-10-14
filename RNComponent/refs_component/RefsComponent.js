import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

export default class RefsComponent extends Component {

    state = {
        size: 80,
    }

    constructor(props) {
        super(props);
    }

    getSize() {
        return this.state.size;
    }


    render() {
        return <Text>RefsComponent</Text>
    }
}