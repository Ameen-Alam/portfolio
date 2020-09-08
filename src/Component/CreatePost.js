import React, { Component } from 'react';


class CreatePost extends Component {
    render() {
        return (
            <div className="container" >
                <h2 className="text-left mt-3 h2">
                    <strong>Leave a reply</strong>
                </h2>
                <div className="text-center text-dark my-3 font-weight-light " >
                    (Logged in as <span style={{ cursor: "pointer" }} className="text-info" >ameenalam<span className="text-dark">.</span> Log out</span>?)
                </div>
                <div className="row mb-5" >
                    <div className="label text-center col-xs-2 col-md-2">
                        <img alt="name" style={{ width: 100 }} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half" />
                    </div>
                    <div className="md-form col-xs-10 col-md-10">
                        <textarea type="text" id="form-contact-message" className="form-control md-textarea" rows="2"></textarea>
                        <label htmlFor="form-contact-message">Your message</label>
                        {/* <span style={{ position: 'absolute', left: -124, bottom: -50 }} className="btn-floating  text-white ">
                        </span> */}
                    </div>
                    <button type="button" className="btn btn-cyan font-weight-bold">POST COMMENTS <i className="fa fa-send-o"></i></button>
                </div>
            </div>
        )
    }
}

export default CreatePost;