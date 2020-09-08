import React, { Component } from 'react';
import {
    IoSocialFacebook, IoSocialLinkedin, IoSocialTumblr, IoSocialVimeo, IoSocialWhatsapp,
    // IoSocialYoutube ,
    IoSocialGithub, IoSocialGoogleplus, IoSocialPinterest, IoIosEmail, IoEarth, IoSocialInstagram
} from 'react-icons/lib/io';
import "./head.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/lib/md'


class Foot extends Component {
    state = {
        value: '03043866719',
        copied: false,
    };
    render() {
        return (
            <div className="text-center " style={{ background: '#009688', color: '#fff' }} >
                {/* popup */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-dark font-weight-bold">
                                +92 304 386 6719
                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button> */}
                                <CopyToClipboard text={this.state.value}
                                    onCopy={() => this.setState({ copied: true })}
                                >
                                    {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : <button style={{ cursor: "pointer" }} className="px-4 py-2 bg-white text-dark"><MdContentCopy /></button>}
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
                {/* popup */}

                <div className="py-3" >
                    <h1 > Ameen Alam </h1>
                    <small style={{ color: "#ddd" }} className="" >&copy; 2018 Full Stack Developer All Right Reserved. </small>
                </div>
                <hr width="75%" align="center" style={{ background: '#616161', display: 'inline-block' }} />
                <br />
                <div className="row pb-5" >
                    <div className="col-sm-12 col-md-12 col-lg-6 text-left" >
                        <p className="px-5 font" >Ameen Alam is Full Stack Developer that promotes technology advocacy, inclusivity and adaptation within the industries of Pakistan; as we know technology… <span style={{ color: "#00d2f3", cursor: "pointer" }} >Read more </span> </p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 pt-5"  >
                        <IoSocialFacebook onClick={() => window.open("https://www.facebook.com/profile.php?id=100008199347637 ", "_blank")} className="footIcon facebook " />
                        <IoSocialLinkedin onClick={() => window.open("https://www.linkedin.com/in/ameen-alam-375390134/", "_blank")} className="footIcon linkedin" />
                        <a style={{ textDecoration: "none" }} href="mailto:ameenalam202@gmail.com"><IoIosEmail className="footIcon email" /></a>
                        <IoSocialGithub onClick={() => window.open("https://github.com/Ameen-Alam", "_blank")} className="footIcon github" />
                        <IoSocialTumblr onClick={() => window.open("https://twitter.com/Ameen__Alam", "_blank")} className="footIcon tumber" />
                        <IoSocialWhatsapp data-toggle="modal" data-target="#exampleModal" className="footIcon whatsapp" />
                        <IoSocialGoogleplus onClick={() => window.open("https://plus.google.com/u/0/116985777031909596698", "_blank")} className="footIcon googleplus" />
                        <IoSocialInstagram onClick={() => window.open("https://www.instagram.com/ameen_alam_bootcamp/?hl=en", "_blank")} className="footIcon instagram" />
                        <IoEarth onClick={() => window.open("http://ameenalam.blogspot.com/", "_blank")} className="footIcon earth" />
                        <IoSocialVimeo onClick={() => window.open("https://vimeo.com/user83610317", "_blank")} className="footIcon vimeo" />
                        <IoSocialPinterest onClick={() => window.open("https://www.pinterest.com/ameenalam202/", "_blank")} className="footIcon pinterest" />
                        {/* <IoSocialYoutube onClick={() => window.open("youtube.com/ameen_alam", "_blank")} className="footIcon youtube" /> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default Foot;
