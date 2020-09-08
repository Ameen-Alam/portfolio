import React, { Component } from 'react';
import Head from './Head'
import MyIntro from './MyIntro'
import Teachers from './Teachers'


class About extends Component {
    render() {
        return (
            <div>
                <Head />
                <MyIntro />
                <Teachers />
            </div>
        )
    }
}

export default About;