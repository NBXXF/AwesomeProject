import React, {Component} from 'react';

var name = "张三";
var age = "26";


export {
    name,
    age,
};

export function add(a, b) {
    return a + b;
}

export default class ExportComponent extends Component {
    render() {
        return <Text>ExportComponent</Text>
    }
}