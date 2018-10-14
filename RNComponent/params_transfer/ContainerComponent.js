import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import BComponent from "./BComponent";
import PropTypes from 'prop-types';

/**
 * Context属性的使用步骤
 * [准备阶段]
 * 1.在产生的参数的最顶级组件中,使用childContextTypes静态属性来定义要放入全局参数的类型
 * 2.在父组件中,提供状态,来管理数据
 * 3.声明子组件获取全局参数的方式
 */
export default class ContainerComponent extends Component {
    static childContextTypes = {
        title: PropTypes.string,
    }


    //定义组件状态
    state = {
        title: "孙悟空",
    }

    //子组件获取方法
    getChildContext() {
        return {
            title: this.state.title,
        }
    }

    render() {
        return <View>
            <BComponent/>
        </View>
    }
}