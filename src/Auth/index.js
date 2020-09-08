import React, { Component } from 'react';
import Nav from './Nav'
import SignIn from './SignIn';
import Signup from './Signup';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isType: false
        }
    }
    render() {
        return (
            <div>
                <Nav signIn={() => { this.setState({ isType: true }) }} signUp={() => { this.setState({ isType: false }) }}  />
                {this.state.isType ?
                    <SignIn />
                    :
                    <Signup />
                }

            </div>
        )
    }
}

export default Auth;