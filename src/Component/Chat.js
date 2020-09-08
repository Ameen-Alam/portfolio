import React, { Component } from 'react';
// import $ from 'jquery'
import {
    IoChatbubbleWorking, IoClose, IoAndroidSend
} from 'react-icons/lib/io'
import { FaMinus, FaPlus } from 'react-icons/lib/fa'
import TextareaAutosize from 'react-autosize-textarea';
import './head.css'


class Contact extends Component {
    state = {
        isUpDown: false,
        text: ""
    }
    componentDidMount() {
        // $("#draggable").draggable();
    }
    render() {
        const { isUpDown, text } = this.state
        return (
            <div id="draggable" style={{ zIndex: 3, padding: 0 }} className=" ui-widget-content chat-width z-depth-2">
                {isUpDown ?
                    <div className="container-fluid p-0" >
                        {/* HEad */}
                        <div className="chat-width-1 view m-0 overlay rgba-green-light btn py-0 px-3" >
                            <div className="pr-1 float-left pt-2"><IoChatbubbleWorking style={{ fontSize: 20 }} className="text-info" /> </div>
                            <div style={{ textShadow: "1px 1px 1px #222" }} className="float-left pt-2"><strong> Chat - Ameen Alam </strong> </div>
                            <div className="float-right" >
                                <div onClick={() => this.setState({ isUpDown: false })} className="view overlay rgba-black-light btn p-1 ml-5"> < FaPlus className="text-info" /> </div>
                                <div onClick={() => this.props.func()} className="view overlay rgba-blak-light btn p-1 ml-1" > <IoClose className="text-info" /> </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid p-0" >
                        {/* HEad */}
                        <div className="chat-width-1 view m-0 overlay rgba-green-light btn py-0 px-3" >
                            <div className="pr-1 float-left pt-2"><IoChatbubbleWorking style={{ fontSize: 20 }} className="text-info" /> </div>
                            <div style={{ textShadow: "1px 1px 1px #ddd" }} className="float-left pt-2"><strong> Chat - Ameen Alam </strong></div>
                            <div className="float-right" >
                                <div onClick={() => this.setState({ isUpDown: true })} className="view overlay rgba-black-light btn p-1 ml-5"> < FaMinus className="text-info" /> </div>
                                <div onClick={() => this.props.func()} className="view overlay rgba-blak-light btn p-1 ml-1" > <IoClose className="text-info" /> </div>
                            </div>
                        </div>
                        {/* HEad */}

                        {/* Live chat */}
                        {/* chat */}
                        <div style={{ background: "#eee" }} className="text-center scrollbar scrollbar-primary mb-1">

                            {/* 1  */}
                            <div style={{ background: "#eee", width: "100%", overflowX: 'hidden' }} className="py-3">
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/* /{/* ameen */}
                                </div>
                                <div style={{ width: "74%" }} className="d-inline-block text-right">
                                    <div style={{ background: '#fff', borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "0px", borderBottomRightRadius: "15px" }} className="p-2" >

                                        <span className="">
                                            Lorem ipsum
                                         </span>

                                    </div>
                                </div>
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/* ameen */}
                                    <img alt="name" style={{ width: 20 }} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half" />
                                </div>
                            </div>

                            {/* 2  */}
                            <div style={{ background: "#eee", width: "100%", overflowX: 'hidden' }} className="py-3">
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/* You */}
                                    <img alt="name" style={{ width: 20 }} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half" />
                                </div>
                                <div style={{ width: "74%" }} className="d-inline-block text-left">
                                    <div style={{ background: '#fff', borderBottomLeftRadius: "15px", borderTopLeftRadius: "0px", borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }} className="p-2" >

                                        <span className="">
                                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                        </span>

                                    </div>
                                </div>
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/* YOU  */}
                                </div>
                            </div>

                            {/* 3  */}
                            <div style={{ background: "#eee", width: "100%", overflowX: 'hidden' }} className="py-3">
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/* You */}
                                    <img alt="name" style={{ width: 20 }} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half" />
                                </div>
                                <div style={{ width: "74%" }} className="d-inline-block text-left">
                                    <div style={{ background: '#fff', borderBottomLeftRadius: "15px", borderTopLeftRadius: "0px", borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }} className="p-2" >

                                        <span className="">
                                            Lorem ipsum
                                        </span>

                                    </div>
                                </div>
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/*  YOU */}
                                </div>
                            </div>

                            {/* 4  */}
                            <div style={{ background: "#eee", width: "100%", overflowX: 'hidden' }} className="py-3">
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/* /{/* ameen */}
                                </div>
                                <div style={{ width: "74%" }} className="d-inline-block text-right">
                                    <div style={{ background: '#fff', borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "0px", borderBottomRightRadius: "15px" }} className="p-2" >

                                        <span className="">
                                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                        </span>

                                    </div>
                                </div>
                                <div style={{ width: "13%" }} className="d-inline-block">
                                    {/* /{/* ameen */}
                                    <img alt="name" style={{ width: 20 }} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg" className="rounded-circle z-depth-1-half" />
                                </div>
                            </div>

                        </div>
                        {/* chat */}
                        {/* Live chat */}

                        {/* typing */}
                        <div style={{ background: "#eee" }} className="pt-1 px-1">
                            <span> <TextareaAutosize value={text} onChange={(e) => this.setState({ text: e.target.value })} className="md-textarea px-3 z-depth-1" maxRows={3} placeholder="Type a message..." style={{ borderRadius: 25, width: "85%", minHeight: 20, maxHeight: 80 }} /></span>
                            <span className="" style={{ cursor: 'pointer', position: 'relative', bottom: 6 }}> <IoAndroidSend className="text-info" style={{ fontSize: 25, elevation: 15 }} /> </span>
                        </div>
                        {/* typing */}

                    </div>
                }
            </div >
        )
    }
}

export default Contact;