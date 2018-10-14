import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import CComponent from "./CComponent";

export default class BComponent extends Component {
    render() {
        return <View>
            <CComponent/>
        </View>
    }
}