import React, { Component } from 'react';
import './head.css'
// import { transparent } from 'material-ui/styles/colors';

class Head extends Component {
    render() {
        return (
            <div className="view intro-2">
                <div className="full-bg-img">
                    <div style={{ height: 450 }} className=" rgba-black-light flex-center">
                        <div className="container  white-text">
                            <div className="animated  rgba-purple-ligh white-text  wow fadeInUp" >
                                <div className="font-1">
                                    <h1>Full Stack Developer</h1>
                                    <h5>JAVA-SCRIPT HTML5 XML JSX CSS3 RESPONSIVE-CSS SASS NODE-JS MONGO-DB</h5>
                                    {/* <br /> */}
                                    <p>React Redux React-Native Firebase Jquery Bootstrap Material-ui Semantic-ui Styled_Component</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Head;

