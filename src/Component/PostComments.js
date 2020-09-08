import React, { Component } from 'react';
import AllPost from './AllPost'
import CreatePost from './CreatePost'
import LoginWithPost from './LoginWithPost'

class Comments extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center  mt-4 h2">
                    <strong>Comments </strong>
                    <span className="badge cyan">182</span>
                </h2>
                <div className="text-center" >
                    <button type="button" className="btn btn-cyan"><i className="fa fa-caret-left" aria-hidden="true"></i>  OLDER COMMENTS  </button>
                    <button type="button" className="btn btn-cyan">NEWER COMMENTS  <i className="fa fa-caret-right" aria-hidden="true"></i> </button>
                </div>
                <AllPost />
                <CreatePost />
                <LoginWithPost />
            </div>
        )
    }
}

export default Comments;