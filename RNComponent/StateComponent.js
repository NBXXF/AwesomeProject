import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

export default class StateComponent extends Component {
    /**
     * 方式1
     * @type {{size: number}}
     */
    state = {
        size: 100,
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
        return <View>
            <Text>StateComponent_{this.state.size}</Text>
            <Image source={require("./src/pic/dog.jpg")}
                   style={{width: this.state.size, height: this.state.size}}/>
            <Text onPress={() => {
                this.setState({
                    size: this.state.size + 10,
                });
            }
            }>放大图片</Text>
            <Text onPress={() => {
                this.setState({
                    size: this.state.size - 10,
                })
            }}>缩小图片</Text>
        </View>;
    }
}