import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/index';

let store = configureStore();
//import Login from './pages/login';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            store: configureStore()
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Text>dh</Text>
            </Provider>
        )
    }
}
