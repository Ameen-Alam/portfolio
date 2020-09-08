import React, { Component } from 'react';
import './head.css'
import Chat from './Chat'
import { IoChatbubbleWorking } from 'react-icons/lib/io'


class ChatCompo extends Component {
    state = {
        isState: false
    }
    funcChange() {
        this.setState({
            isState: false
        })
    }
    render() {
        const { isState } = this.state
        return (
            <div>
                {isState ?
                    <Chat func={this.funcChange.bind(this)} />
                    :
                    <div onClick={() => this.setState({ isState: true })} className="view overlay rgba-black-light btn p-0" style={{ position: "fixed", bottom: 7, right: 10, zIndex: 3, cursor: 'pointer' }}><IoChatbubbleWorking className="chat-icon  p-0" style={{ fontSize: 65 }} > <a href="#!"> <div className="mask rgba-white-slight"></div> </a> </IoChatbubbleWorking> </div>
                }
            </div>
        )
    }
}

export default ChatCompo;