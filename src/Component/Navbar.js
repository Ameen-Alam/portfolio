import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar ">
                    <div className='container' >
                        <strong style={{ cursor : "default" }} className="navbar-brand mr-auto" >Ameen Alam</strong>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <strong className="navbar-brand mr-auto" ></strong>
                            <ul className="navbar-nav ">
                                <NavbarLink activeOnlyWhenExact={true} to="/" label="Home" />
                                <NavbarLink to="/about" label="About" />
                                <NavbarLink to="/work" label="My Work" />
                                <NavbarLink to="/contact" label="Contact" />
                                <NavbarLink to="/Comments" label="Comments" />
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

const NavbarLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <div className={match ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to={to}>{label}</Link>
        </div>
    )} />
)

export default NavBar;