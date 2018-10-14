/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HelloComponent from "./RNComponent/HelloComponent";
import LifecycleComponent from "./RNComponent/LifecycleComponent";
import {add, age, name} from "./RNComponent/ExportComponent";

import ExportComponent from "./RNComponent/ExportComponent";
import PropsComponent from "./RNComponent/PropsComponent";
import StateComponent from "./RNComponent/StateComponent";

import RefsTestComponent from "./RNComponent/refs_component/RefsTestComponent";
import ClassComponent from "./RNComponent/class_component/ClassComponent.js";
import ClickComponent from "./RNComponent/clickcomponent/ClickComponent";
import ContainerComponent from "./RNComponent/params_transfer/ContainerComponent.js";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            remove: false,
            size: 0,
        }
    }

    render() {
        var view = this.state.remove ? null : <LifecycleComponent name="life"/>;
        var text = this.state.remove ? "装载LifecycleComponent" : "卸载LifecycleComponent";
        var param = {name: "李四", age: 22};

        var {name, age} = param;
        return (
            <View style={styles.container}>
                <HelloComponent name="xxf2"/>
                {/*<LifecycleComponent name="life"/>*/}
                {view}
                <Text onPress={() => {
                    this.setState({
                        remove: !this.state.remove,
                    });
                }}>{text}_{name}_{age}_{add(1, 22)}</Text>

                <PropsComponent age={22}/>
                <PropsComponent name={param.name} age={param.name}/>
                <PropsComponent {...param}/>
                <PropsComponent name={name} age={age}/>

                <StateComponent/>
                <RefsTestComponent/>
                <ClassComponent/>
                <ClickComponent/>
                <ContainerComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
