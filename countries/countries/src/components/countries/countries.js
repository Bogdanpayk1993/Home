import React, { Component } from 'react';

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: null
        }

        let url = 'https://restcountries.eu/rest/v2'
        fetch(url)
        .then(res => res.json())
        .then((out) => {
            this.setState({countries: out})
        })
        .catch(err => console.log(err))
    }

    render() {
        const { countries } = this.state
        if (countries != null)
        {
            countries.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0))
        }

        return (
            <>
                <h1> List of countries </h1>
                {
                    countries != null ?
                        <table>
                            <tbody>
                                <th> № </th>
                                <th> Name </th>
                                <th> Capital </th>
                                <th> Area </th>
                                <th> Population </th>
                                {
                                    countries.map((el, index) => 
                                        <tr>
                                            <td>
                                                {
                                                    index + 1
                                                }
                                            </td>
                                            <td>
                                                {
                                                    el.name
                                                }
                                            </td>
                                            <td>
                                                {
                                                    el.capital
                                                }
                                            </td>
                                            <td>
                                                {
                                                    el.area
                                                }
                                            </td>
                                            <td>
                                                {
                                                    el.population
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    :
                    null
                }
            </>
        );
    }
}

export default Countries;