import React, { Component } from 'react';

import Header from "../Header/Header"
import Slider from "../Slider/Slider"
import Contacts from "../Contacts/Contacts"
import Feedback from "../Feedback/Feedback"
import Message_about_send_email from "../Message_about_send_email/Message_about_send_email"
import Big_img from "../Big_img/Big_img"
import language_map from "../language_map/language_map"
import './Wedding_market.css'


class Wedding_markrt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regime: 0,
            language: "Ukraine",
            img: 0
        }
    }

    change_regime = (regime) => {
        this.setState({
            regime: regime,
            language: this.state.language,
            img: this.state.img
        })
    }

    change_img = (img) => {
        this.setState({
            regime: this.state.regime,
            language: this.state.language,
            img: img
        })
    }

    change_language = (language) => {
        this.setState({
            regime: this.state.regime,
            language: language,
            img: this.state.img 
        })
    }

    render() {
        var width = document.documentElement.clientWidth
        return (
            width >= 600 ?
                <>
                    {
                        this.state.img != 0 ?
                            <Big_img img={this.state.img} change_img={this.change_img} />
                            :
                            null
                    }
                    <Header language={this.state.language} change_language={this.change_language} />
                    <table>
                        <tbody>
                            <tr>
                                <td className="column">
                                    <Slider change_img={this.change_img} />
                                </td>
                                <td className="column">
                                    {
                                        this.state.regime == 0 ?
                                            <Contacts language_map={language_map} language={this.state.language} />
                                            :
                                            <Message_about_send_email language_map={language_map} language={this.state.language} change_regime={this.change_regime} />
                                    }
                                </td>
                                <td className="column">
                                    <Feedback language_map={language_map} language={this.state.language} change_regime={this.change_regime} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
                :
                <>
                    {
                        this.state.img == 0 ?
                            this.state.regime == 0 ?
                                <>
                                    <Header language={this.state.language} change_language={this.change_language} />
                                    <div className="column_wedding_market">
                                        <Slider change_img={this.change_img} />
                                    </div>
                                    <div className="column_wedding_market">
                                        <Contacts language_map={language_map} language={this.state.language} />
                                    </div>
                                    <div className="column_wedding_market">
                                        <Feedback language_map={language_map} language={this.state.language} change_regime={this.change_regime} />
                                    </div>
                                </>
                                :
                                <>
                                    <h1 className="siteName_wedding_market"> Wedding Market by Anna </h1>
                                    <div className="column_wedding_market">
                                        <Message_about_send_email language_map={language_map} language={this.state.language} change_regime={this.change_regime} />
                                    </div>
                                </>
                            :
                            <>
                                <Big_img img={this.state.img} change_img={this.change_img} />
                            </>
                    }
                </>
        );
    }
}

export default Wedding_markrt;