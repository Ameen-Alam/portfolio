import React, { Component } from 'react';


class Notfound extends Component {
    render() {
        return (
            <div className="text-center bg-light" >
                <h1 className="display-1 bg-dark text-light p-5" >URL Notfound</h1>
                <div className=" container p-5 text-left">
                    <h1 className="text-dark">
                        This site can’t be reached
                    </h1>
                    <p className="grey-text">
                        Try:
                    </p>
                    <ul className="text-dark">
                        <li>
                            Checking the network cables, modem, and router
                    </li>
                        <li>
                            Reconnecting to Wi-Fi
                    </li>
                        <li>
                            <a href="/" >
                                Running Windows Network Diagnostics
                            </a>
                        </li>
                    </ul>
                    <p className="grey-text">
                        DNS_PROBE_FINISHED_NO_INTERNET
                    </p>
                </div>
            </div>
        )
    }
}

export default Notfound;