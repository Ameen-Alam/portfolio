import React, { Component } from 'react';


class LoginWithPost extends Component {
    render() {
        return (
            <div className="mb-5 container" >
                <h2 className="text-left mt-3 h2">
                    <strong>Leave a reply</strong>
                </h2>
                {/* <!-- Material textarea message --> */}
                <div className="md-form form-sm">
                    <i className="fa fa-pencil prefix"></i>
                    <textarea type="text" id="materialFormMessageModalEx1" className="md-textarea form-control"></textarea>
                    <label htmlFor="materialFormMessageModalEx1">Your message</label>
                </div>
                {/* <!-- Material input name --> */}
                <div className="md-form form-sm">
                    <i className="fa fa-envelope prefix"></i>
                    <input type="text" id="materialFormNameModalEx1" className="form-control form-control-sm" />
                    <label htmlFor="materialFormNameModalEx1">Your name</label>
                </div>
                {/* <!-- Material input email --> */}
                <div className="md-form form-sm">
                    <i className="fa fa-lock prefix"></i>
                    <input type="password" id="materialFormEmailModalEx1" className="form-control form-control-sm" />
                    <label htmlFor="materialFormEmailModalEx1">Your email</label>
                </div>
                {/* <!-- Material input subject --> */}
                <div className="md-form form-sm">
                    <i className="fa fa-tag prefix"></i>
                    <input type="text" id="materialFormSubjectModalEx1" className="form-control form-control-sm" />
                    <label htmlFor="materialFormSubjectModalEx1">Subject</label>
                </div>
                <button type="button" className="btn btn-cyan font-weight-bold">POST COMMENTS <i className="fa fa-send-o"></i></button>
            </div>
        )
    }
}

export default LoginWithPost;