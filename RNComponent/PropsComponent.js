import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";

export default class PropsComponent extends Component {
    static defaultProps =
        {
            age: 24,
        }
    static propTypes = {
        age: PropTypes.int,
        name:PropTypes.string.isRequired,//必传
    }

    render() {
        return <Text>propscomponent_getprops:{this.props.name}_{this.props.age}</Text>
    }
}
