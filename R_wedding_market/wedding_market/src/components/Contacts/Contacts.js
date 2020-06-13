import React, { Component } from 'react';
import './Contacts.css'

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goToFacebook = () => {
        window.open('https://www.facebook.com/Wedding-market-uzchorod-103885777664656/')
    }
 
    render() {
        const { language_map, language } = this.props
        return (
            <>
                <div className="contacts">
                    <h3> {language_map[language].contacts.title} </h3>
                    <p> {language_map[language].contacts.phone} </p>
                    <p> {language_map[language].contacts.e_mail} </p>
                </div>
                <div className="contacts">
                    <h3> {language_map[language].address.title} </h3>
                    <p> {language_map[language].address.address} </p>
                </div>
                <div className="contacts"> 
                    <h3> {language_map[language].work_schedule.title} </h3>
                    <table>
                        <tbody>
                            <tr>
                                <td> {language_map[language].work_schedule.schedule.mon.title} </td>
                                <td> : </td>
                                <td> {language_map[language].work_schedule.schedule.mon.work_time} </td>
                            </tr>
                            <tr>
                                <td> {language_map[language].work_schedule.schedule.tue.title} </td>
                                <td> : </td>
                                <td> {language_map[language].work_schedule.schedule.tue.work_time} </td>
                            </tr>
                            <tr>
                                <td> {language_map[language].work_schedule.schedule.wed.title} </td>
                                <td> : </td>
                                <td> {language_map[language].work_schedule.schedule.wed.work_time} </td>
                            </tr>
                            <tr>
                                <td> {language_map[language].work_schedule.schedule.thu.title} </td>
                                <td> : </td>
                                <td> {language_map[language].work_schedule.schedule.thu.work_time} </td>
                            </tr>
                            <tr>
                                <td> {language_map[language].work_schedule.schedule.fri.title} </td>
                                <td> : </td>
                                <td> {language_map[language].work_schedule.schedule.fri.work_time} </td>
                            </tr>
                            <tr>
                                <td> {language_map[language].work_schedule.schedule.sat.title} </td>
                                <td> : </td>
                                <td> {language_map[language].work_schedule.schedule.sat.work_time} </td>
                            </tr>
                            <tr>
                                <td> {language_map[language].work_schedule.schedule.sun.title} </td>
                                <td> : </td>
                                <td> {language_map[language].work_schedule.schedule.sun.work_time} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="contacts">
                    <button className="contacts_button" onClick={this.goToFacebook}> {language_map[language].buttom} </button>
                </div>
            </>
        );
    }
}

export default Contacts;