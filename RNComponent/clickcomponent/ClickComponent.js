import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Alert} from 'react-native';

export default class ClickComponent extends Component {
    handleBtnClick(e) {
        console.log("=====xxx");
    }

    render() {
        return <View>
            <Text onPress={this.handleBtnClick.bind(this)}>点击事件</Text>
            <TouchableWithoutFeedback onPress={() => {
                Alert.alert("xxx");
            }} onLongPress={() =>
                console.log("长按")
            } onPressIn={() =>
                console.log("点击开始")
            } onPressOut={() =>
                console.log("点击结束")
            }>
                <Text>TouchableWithoutFeedback</Text>
            </TouchableWithoutFeedback>
        </View>
    }
}