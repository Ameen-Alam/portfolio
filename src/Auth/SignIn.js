import React, { Component } from 'react';
import AuthProgress from './AuthProgress';
import './AuthStyle.css'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { AuthAction } from '../store/actions'
import history from '../Routes/History'


let mapStateToProps = (state) => {
    return ({

    })
}
let mapDispatchToProps = (dispatch) => {
    return ({
        loginUser: (obj) => { dispatch(AuthAction.loginUser(obj)) },
    })
}

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "ameen@gmail.com",
            password: "password",
            error: ""
        }
    }
    changeHandler(property, event) {
        this.setState({
            [property]: event.target.value
        })
    }
    SignIn(e) {
        e.preventDefault()
        let state = this.state
        let obj = {
            email: state.email.toLowerCase(),
            password: state.password
        }
        if (obj.email === "" || obj.password === "") {
            this.setState({
                error: "all field are requird"
            })
        } else {
            this.props.loginUser(obj)
            this.setState({
                email: "",
                password: "",
                error: ""
            })

        }
    }
    render() {
        const { email, password, error } = this.state
        return (
            <div className="container text-center " >
                <form action="#" onSubmit={this.SignIn.bind(this)}  >
                    <input value={email} onChange={this.changeHandler.bind(this, 'email')} id="email" className="px-3 m-3" placeholder="Email" type="email" />
                    <input value={password} onChange={this.changeHandler.bind(this, 'password')} id="password" className="px-3 m-3" placeholder="Password " type="password" />
                    <br />
                    <p className="text-danger bg-light" >{error}</p>

                    <button type="submit" className="btn btn-info btn-sm px-5 font-weight-bold" >Sign In</button>
                </form>
                <br />{email}<br /> {password}
                <button onClick={ () => history.push('/auth') } >
                    aa
                </button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);