import React, { Component } from 'react';
// const $ = require('jquery')
// $.DataTable = require('datatables.net')
import { IoSocialJavascript, IoSocialApple, IoIosMore } from 'react-icons/lib/io'
import { MdApps } from 'react-icons/lib/md'
import './head.css'

class Techno extends Component {
    render() {
        return (
            <div style={{ background: "#009688" }} className="" >
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-lg-4">
                            <IoSocialJavascript className="fontTechno" />
                            <br />
                            <h4 className="text-white" >Web Developer </h4>
                            <p className="paragraph" >
                                I create dynamic web applications. Examples of web applications are social networking sites like Facebook or e-commerce sites like Amazon.
                            </p>
                            <IoIosMore className="fontTechno2" />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-lg-4">
                            <MdApps className="fontTechno" />
                            <br />
                            <h4 className="text-white" >Android Developer</h4>
                            <p className="paragraph">
                                I create Android applications. Examples of Android applications are chat apps like whatsapp or e-commerce apps like daraz.
                            </p>
                            <IoIosMore className="fontTechno2" />
                        </div>
                        <div className="col-xs-12 col-sm-4 col-lg-4">
                            <IoSocialApple className="fontTechno" />
                            <br />
                            <h4 className="text-white" >IOS Developer </h4>
                            <p className="paragraph">
                                I create IOS applications. Examples of IOS applications are booking apps like airbnb or IOT apps like Smart home.
                             </p>
                            <IoIosMore className="fontTechno2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Techno;
