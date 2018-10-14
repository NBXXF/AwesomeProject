import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

/**
 * 在子组件中使用,使用contextTypes静态属性,声明需要获取父组件放入全局的context中的参数
 * 在子组件需要的地方,获取全局参数
 *  this.context.全局参数名
 */
export default class CComponent extends Component {

    static contextTypes = {
        title: PropTypes.string,
    }

    render() {
        return <View>
            <Text>this is CComponent {this.context.title}</Text>
        </View>
    }
}