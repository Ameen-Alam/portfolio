import React, { Component } from 'react';


class Language extends Component {
    render() {
        return (
            <div className="container" >

                {/* // <!--Card group--> */}
                <div className="row ">
                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="React" style={{ width: "100%", height: 120 }} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsAB4FDPiRZGvpEQYbBHpI0r9wPn_QNZfHCofATKHWGk2lNN6" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">

                                {/* <!--Title--> */}
                                <h4 className="card-title">REACT</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.</p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open('https://reactjs.org/', "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}

                    {/* <!--Card--> */}
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4  col-xl-4 ">
                        <div className=" card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="Redux" style={{ width: "100%", height: 120 }} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzjc2EByAlRc0lMsD5vDanZz4BHBkNFpSvmpz4Bnf9jmVx5oN" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">
                                {/* <!--Title--> */}
                                <h4 className="card-title">REDUX</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.</p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open('https://redux.js.org/', "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}

                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="React Native" style={{ width: "100%", height: 120 }} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAACyVBvlyeJTCKCj-gAC_lkcPRspfo8_RGjyp97RH-A6d96p" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">
                                {/* <!--Title--> */}
                                <h4 className="card-title">REACT-NATIVE</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">
                                    A React Native app is a real mobile app from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps.
                                </p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open('https://facebook.github.io/react-native/', "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}


                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="Node JS" style={{ width: "100%", height: 120 }} className="img-fluid" src="data:image/png;base64,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" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">

                                {/* <!--Title--> */}
                                <h4 className="card-title">NODE JS</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.</p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open("https://nodejs.org/en/docs/", "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}
                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="Express" style={{ width: "100%", height: 120 }} className="img-fluid" src="data:image/png;base64,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" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">
                                {/* <!--Title--> */}
                                <h4 className="card-title">EXPRESS</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. </p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open("https://expressjs.com/", "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}


                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="Apache" style={{ width: "100%", height: 120 }} className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG54gf7uFZXFk8EO5CwJqvk72QlGWjfg-KBqkFkeIJrI7ypwKbA" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">

                                {/* <!--Title--> */}
                                <h4 className="card-title">APCHE</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">The Apache HTTP Server, colloquially called Apache, is a free and open-source cross-platform web server, released under the terms of Apache License 2.0.</p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open("https://httpd.apache.org/", "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}


                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="Mongo DB" style={{ width: "100%", height: 120 }} className="img-fluid" src="data:image/png;base64,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" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">
                                {/* <!--Title--> */}
                                <h4 className="card-title">MONGO DB</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.</p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open("https://www.mongodb.com/", "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}

                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="SQL" style={{ width: "100%", height: 120 }} className="img-fluid" src="data:image/jpeg;base64,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" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">
                                {/* <!--Title--> */}
                                <h4 className="card-title">SQL</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.</p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open("https://en.wikipedia.org/wiki/SQL", "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}


                    {/* <!--Card--> */}
                    <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
                        <div className="card m-4">

                            {/* <!--Card image--> */}
                            <div className="view overlay">
                                <img alt="Docker" style={{ width: "100%", height: 120 }} className="img-fluid" src="data:image/png;base64,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" />
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* <!--Card image--> */}

                            {/* <!--Card content--> */}
                            <div className="card-body">
                                {/* <!--Title--> */}
                                <h4 className="card-title">DOCKER</h4>

                                {/* <!--Text--> */}
                                <p className="card-text">Docker is a computer program that performs operating-system-level virtualization also known as containerization. It is developed by Docker, Inc.</p>

                                {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
                                <button onClick={() => window.open("https://www.docker.com/", "_blank")} type="button" className="btn btn-primary btn-md">Read more</button>
                            </div>
                            {/* <!--Card content--> */}

                        </div>
                    </div>
                    {/* <!--Card--> */}

                </div>
                {/* // <!--Card group--> */}
                {/* <!--Card--> */}
                <div className="card card-cascade wider reverse m-4">

                    {/* <!--Card image--> */}
                    <div className="view overlay">
                        <img alt="Java Script" style={{ width: "100%" }} src="data:image/png;base64,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" className="img-fluid" />
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    {/* <!--/Card image--> */}

                    {/* <!--Card content--> */}
                    <div className="card-body text-center">
                        {/* <!--Title--> */}
                        <h4 className="card-title"><strong>High-level programming language</strong></h4>
                        <h5 className="indigo-text"><strong>Designed by:<a onClick={() => window.open('https://en.wikipedia.org/wiki/Brendan_Eich', "_blank")}> Brendan Eich </a> </strong></h5>

                        <p className="card-text">JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>

                        {/* <!--Linkedin--> */}
                        {/* <a className="icons-sm li-ic"><i className="fa fa-linkedin"> </i></a> */}
                        {/* <!--Twitter--> */}
                        {/* <a className="icons-sm tw-ic"><i className="fa fa-twitter"> </i></a> */}
                        {/* <!--Dribbble--> */}
                        {/* <a className="icons-sm fb-ic"><i className="fa fa-facebook"> </i></a> */}

                    </div>
                    {/* <!--/.Card content--> */}

                </div>
                {/* <!--/.Card--> */}
            </div>
        )
    }
}

export default Language;
