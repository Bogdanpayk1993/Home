import React, { Component } from 'react';

class Day extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name_day, date, films} = this.props
        return (
            <>
                <h1> Розклад фільмів на {name_day} {date} </h1>
                <table align="center">
                    <tr>
                        <td> Час початку </td>
                        <td> Назва </td>
                        <td> Вартість </td>
                    </tr>
                    {
                        films.map((el) => 
                        <tr>
                            {
                                el.map((el) => 
                                <td>
                                    {el}
                                </td>)
                            }
                        </tr>)
                    }
                </table>
            </>
        );
    }
}

export default Day;