import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as TYPES from '../actions/types';
import MainPage from '../pages/main';
import {connect} from 'react-redux';
// fake user data
let testUser = {
    'name': 'juju',
    'age': '24',
    'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
};

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    handleLogin() {
       // dispatch({'type': TYPES.LOGGED_IN, 'user': testUser});
    }

    render() {
        return <Text onPress={this.handleLogin}>登录</Text>
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedIn === true) {
            //跳转主页面
            this.push(props, {
                page: MainPage,
                name: 'main-page'
            })
        }
    }
}

function mapState2Props(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        status: store.userStore.status,
    }
}

export default connect(mapState2Props)(LoginPage);