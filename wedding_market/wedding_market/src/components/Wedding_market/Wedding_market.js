import React, { Component } from 'react';

import Slider from "../Slider/Slider"
import Contacts from "../Contacts/Contacts"
import Feedback from "../Feedback/Feedback"
import Message_about_send_email from "../Message_about_send_email/Message_about_send_email"
import './Wedding_market.css'

class Wedding_markrt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regime: 0
        }
    }

    change_regime = (regime) => {
        this.setState({
            regime: regime
        })
    }

    render() {

        var width = document.documentElement.clientWidth
        return (
            width > 600 ?
                <>
                    <h1 className="siteName_wedding_market"> Wedding Market by Anna </h1>
                    <table>
                        <tbody>
                            <tr>
                                <td className="column"> 
                                    <Slider />
                                </td>
                                <td className="column">
                                    {
                                        this.state.regime == 0 ?
                                            <Contacts/>
                                            :
                                            <Message_about_send_email change_regime={this.change_regime} />
                                    }  
                                </td>
                                <td className="column">
                                    <Feedback change_regime={this.change_regime} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
                :
                <>
                    {
                        this.state.regime == 0 ?
                            <>
                                <h1 className="siteName_wedding_market"> Wedding Market by Anna </h1>
                                <div className="column_wedding_market">
                                    <Slider />
                                </div>
                                <div className="column_wedding_market">
                                    <Contacts />
                                </div>
                                <div className="column_wedding_market">
                                    <Feedback change_regime={this.change_regime} />
                                </div>
                            </>
                            :
                            <>
                                <h1 className="siteName_wedding_market"> Wedding Market by Anna </h1>
                                <div className="column_wedding_market">
                                    <Message_about_send_email change_regime={this.change_regime} />
                                </div>
                            </>
                    }
                </>
        );
    }
}

export default Wedding_markrt;