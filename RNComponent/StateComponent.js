import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class StateComponent extends Component {
    /**
     * 方式1
     * @type {{size: number}}
     */
    state = {
        size: 40,
    }

    constructor(props) {
        super(props);
        /**
         * 方式2
         */
        /*this.state = {
            size: 90,
        }*/
    }

    render() {
        return <Text>StateComponent_{this.state.size}</Text>;
    }
}