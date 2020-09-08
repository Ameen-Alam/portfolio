import React, { Component } from 'react';
import AuthProgress from './AuthProgress';
import './AuthStyle.css'
import { RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import { AuthAction } from '../store/actions'

let mapStateToProps = (state) => {
    return ({

    })
}
let mapDispatchToProps = (dispatch) => {
    return ({
        createUser: (obj) => { dispatch(AuthAction.createUser(obj)) },
    })
}


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "ameen",
            phone: "456456",
            email: "ameen@gmail.com",
            password: "password",
            img: '',
            error: ""
        }
    }
    changeHandler(property, event) {
        this.setState({
            [property]: event.target.value
        })
    }
    Signup(e) {
        e.preventDefault()
        let state = this.state
        let obj = {
            name: state.name.toLowerCase(),
            phone: state.phone.toLowerCase(),
            email: state.email.toLowerCase(),
            password: state.password,
            img: state.img
        }
        if (obj.name === "" || obj.phone === "" || obj.email === "" || obj.password === "") {
            this.setState({
                error: "all field are requird"
            })
        } else {
            this.props.createUser(obj)
            this.setState({
                name: "",
                phone: "",
                email: "",
                password: "",
                img: '',
                error: ""
            })
        }
    }
    render() {
        const { name, phone, email, password, img, error } = this.state
        return (
            <div className="container text-center" >
                <form action="#" onSubmit={this.Signup.bind(this)}  >
                    <input value={name} onChange={this.changeHandler.bind(this, 'name')} id="name" className="px-3 m-3" className="px-3 m-3" placeholder="User Name" type="text" />
                    <input value={phone} onChange={this.changeHandler.bind(this, 'phone')} id="phone" className="px-3 m-3" className="px-3 m-3" placeholder="Phone" type="number" />
                    <input value={email} onChange={this.changeHandler.bind(this, 'email')} id="email" className="px-3 m-3" placeholder="Email" type="email" />
                    <input value={password} onChange={this.changeHandler.bind(this, 'password')} id="password" className="px-3 m-3" placeholder="Password " type="password" />
                    <br />
                    <p className="text-danger bg-light" >{error}</p>
                    <RaisedButton containerElement='label' label='My Label'> <input value={img} onChange={this.changeHandler.bind(this, 'img')} type="file" /> </RaisedButton>
                    <br />
                    <br />
                    <button type="submit" className="btn btn-info btn-sm px-5 font-weight-bold" >Sign Up</button>
                </form>
                <br />{email}<br /> {password}<br />{phone}<br /> {name}<br /> {img}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);