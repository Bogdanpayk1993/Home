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
        return (
            <>
                <div className="contacts">
                    <h3> Контакти </h3>
                    <p> Телефон: 050 582 40 42 </p>
                    <p> e-mail: annakrochak71@gmail.com </p>
                </div>
                <div className="contacts">
                    <h3> Адреса </h3>
                    <p> Ужгород, Ринок "Краснодонців", вул.Замкома, маг.13 </p>
                </div>
                <div className="contacts"> 
                    <h3> Графік роботи </h3>
                    <table>
                        <tbody>
                            <tr>
                                <td> Понеділок </td>
                                <td> : </td>
                                <td> Зачинено </td>
                            </tr>
                            <tr>
                                <td> Вівторок </td>
                                <td> : </td>
                                <td> з 09:00 до 14:30 </td>
                            </tr>
                            <tr>
                                <td> Середа </td>
                                <td> : </td>
                                <td> з 09:00 до 14:30 </td>
                            </tr>
                            <tr>
                                <td> Четвер </td>
                                <td> : </td>
                                <td> з 09:00 до 14:30 </td>
                            </tr>
                            <tr>
                                <td> П'ятниця </td>
                                <td> : </td>
                                <td> з 09:00 до 14:30 </td>
                            </tr>
                            <tr>
                                <td> Субота </td>
                                <td> : </td>
                                <td> з 09:00 до 15:00 </td>
                            </tr>
                            <tr>
                                <td> Неділя </td>
                                <td> : </td>
                                <td> з 09:00 до 15:00 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="contacts">
                    <button className="contacts_button" onClick={this.goToFacebook}> Переглянути наші товари </button>
                </div>
            </>
        );
    }
}

export default Contacts;