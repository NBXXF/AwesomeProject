import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import RefsComponent from "./RefsComponent";

export default class RefsTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            size1: 0,
        }
    }

    render() {
        return <View>
            <Text onPress={() => {
                var sizeFrom = this.refs.xx.getSize();
                //var sizeFrom = this.refs['xx'].getSize();
                this.setState({
                    size: sizeFrom,
                });
            }}>获取到size:{this.state.size}</Text>
            <Text onPress={() => {
                var sizeFrom = this.xx2.getSize();
                this.setState({
                    size1: sizeFrom,
                });
            }}>获取到size2:{this.state.size1}</Text>
            <RefsComponent ref="xx"/>
            <RefsComponent ref={xx2 => this.xx2 = xx2}/>
        </View>
    }
}