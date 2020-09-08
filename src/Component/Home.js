import React, { Component } from 'react';
import './head.css'
import Head from './Head'
import Techno from './Techno'
import Language from './Language'

class Home extends Component {
    render() {
        return (
            <div className="" >
                <Head />
                <Techno />
                <Language />
            </div>
        )
    }
}

export default Home;
