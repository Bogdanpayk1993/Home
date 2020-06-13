import React, { Component } from 'react';
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { language, change_language } = this.props
        return ( 
            <table className="header">
                <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <h1> Wedding Market by Anna </h1>
                        </td>
                        <td>
                            <div>
                                <div>
                                    <img className="language" src={`./image/${language}.jpg`} />
                                </div>
                                <div>
                                    <img src={`./image/Ukraine.jpg`} onClick={(e) => change_language("Ukraine", e)} />
                                </div>
                                <div>
                                    <img src={`./image/Russia.jpg`} onClick={(e) => change_language("Russia", e)} />
                                </div>
                                <div>
                                    <img src={`./image/English.jpg`} onClick={(e) => change_language("English", e)} />
                                </div>
                                <div>
                                    <img src={`./image/Slovakia.jpg`} onClick={(e) => change_language("Slovakia", e)} />
                                </div>
                                <div>
                                    <img src={`./image/Hungary.jpg`} onClick={(e) => change_language("Hungary", e)} />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
         );
    }
}
 
export default Header;
