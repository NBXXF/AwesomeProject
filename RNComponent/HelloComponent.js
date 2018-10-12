import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
/**
 * 方式1：ES6
 */
export default class HelloComponent extends Component {
    render() {
        return <Text>hello1.{this.props.name}</Text>
    }
}

/**
 * 方式2:ES5
 */
/*var HelloComponent = React.createClass({
    render() {
        return <Text>hello2.{this.props.name}</Text>
    }
})
module.exports = HelloComponent;*/

/**
 * 方式3:函数式
 * 无状态,不能使用this
 */
/*function HelloComponent(props) {
    return <Text>hello3.{props.name}</Text>
}
module.exports = HelloComponent;*/
