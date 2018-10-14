import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Student from "./Student";
import MingStudent from "./MingStudent";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.stu = new Student("小王", 27);
        this.stu2 = new MingStudent();
    }

    render() {
        return <View>
            <Text>获取Student类的实例子:name:{this.stu.name}+" age:"+{this.stu.age}+"\ngetDesc"+{this.stu.getDesc()}</Text>
            <Text>获取MingStudent类的实例子:name:{this.stu2.name}+"
                age:"+{this.stu2.age}"\ngetDesc"+{this.stu2.getDesc()}</Text>
        </View>;
    }
}