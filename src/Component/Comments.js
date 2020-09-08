import React, { Component } from 'react';
import Head from './Head'
import TestMonial from './TestMonial'
import PostComments from './PostComments'

class Comments extends Component {
    render() {
        return (
            <div>
                <Head />
                <TestMonial />
                <PostComments />
            </div>
        )
    }
}

export default Comments;