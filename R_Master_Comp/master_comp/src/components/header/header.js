import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goFacebook = () => {
        window.location.assign('http://www.facebook.com/mastercomp2/')
    }

    goInstagram = () => {
        window.location.assign('https://www.instagram.com/mastercomp_uzh/?hl=ru')
    }

    goGoogleMap = () => {
        window.location.assign('https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D1%82%D1%80%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%87%D0%BD%D0%B0%D1%8F,+80,+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+88000/@48.6364085,22.3038453,19z/data=!4m5!3m4!1s0x473919cd06c60cfd:0x6e2a3b459625cc3e!8m2!3d48.6361841!4d22.3038672')
    }

    render() {
        return (
            <>
                <table className="header">
                    <tbody>
                        <tr>
                            <td>
                                <form>
                                    <img src="./image/facebook.png" onClick={this.goFacebook} />
                                    <img src="./image/instagram.png" onClick={this.goInstagram} />
                                    <img src="./image/googlemap.png" onClick={this.goGoogleMap} />
                                </form>
                            </td>
                            <td>
                                <form>
                                    Контакти:
                                    <select>
                                        <option> (066) 537-60-25 </option>
                                        <option> (068) 243-83-74 </option>
                                        <option> mastercomp_uzh@ukr.net </option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <span> <img src="./image/men.png" /> </span>
                <span className="Master"> Master</span>
                <span className="Comp">Comp </span>
            </>
        );
    }
}

export default Header;
