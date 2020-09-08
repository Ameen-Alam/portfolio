import React, { Component } from 'react';


class Nav extends Component {
    render() {
        return (
            <div className="container-fluid py-2 mb-2 bg-info text-white text-center" >

                <button onClick={this.props.signUp} className="btn btn-sm btn-success mx-2">SignUp</button>
                <button onClick={this.props.signIn} className="btn btn-sm btn-success mx-2">SignIn</button>

            </div>
        )
    }
}

export default Nav;