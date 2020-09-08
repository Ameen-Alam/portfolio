import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


import History from './History'
import Auth from './CheckAuth'
import Notfound from '../Component/Notfound'
import Home from '../Component/Home'
import About from '../Component/About'
import Contact from '../Component/Contact'
import Comments from '../Component/Comments'
import MyWork from '../Component/MyWork'

import Navbar from '../Component/Navbar'
// import ChatCompo from '../Component/ChatCompo'
import Foot from '../Component/Foot'

injectTapEventPlugin();

function mapStateToProps(state) {
    return {
    }
}

class Routers extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router history={History} >
                    <div style={{ width: "100%", overflowX: "hidden" }} >
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/Comments" component={Comments} />
                            <Route path="/work" component={MyWork} />
                            <Route path="/contact" component={Contact} />
                            <Route path="*" component={Auth(Notfound)} />
                        </Switch>
                        {/* <ChatCompo /> */}
                        <Foot />
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps, null)(Routers);