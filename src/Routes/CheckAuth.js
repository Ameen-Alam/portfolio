import React, { Component } from 'react';
import History from './History';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        isLogin: state.AuthReducer.LoginSuccess,
    }
}

export default function (ComposedComponent) {
    class Auth extends Component {
        componentWillMount() {
            if (!this.props.isLogin) {
                History.push('/');
            }
        }
        componentWillUpdate({ isLogin }) {
            if (!isLogin) {
                History.push('/');
            }
        }
        render() {
            return (
                ComposedComponent ? <ComposedComponent {...this.props} /> : alert("There is no Async component")
            )
        }
    }

    return connect(mapStateToProps, null)(Auth);
}
