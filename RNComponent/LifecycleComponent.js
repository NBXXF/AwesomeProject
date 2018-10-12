import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log("====constructor:props:" + props);
        this.state = {
            count: 0,
        }
    }

    componentWillMount() {
        console.log("====componentWillMount");
    }

    componentDidMount() {
        console.log("====componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("====componentWillReceiveProps nextProps:" + nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("====shouldComponentUpdate:nextProps:" + nextProps + " nextState:" + nextState);
        return true;
    }

    componentWillUpdate() {
        console.log("====componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("====componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("====componentWillUnmount");
    }

    render() {
        console.log("====render");
        return <View>
            <Text onPress={()=>
                this.setState({
                count:this.state.count+1,
            })
            }>生命周期:{this.state.count}</Text>
        </View>
    }

}