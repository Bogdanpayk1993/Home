import React, { Component } from 'react';
import "./userslist.css"

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Список користувачів"
        }
        this.users = [
            { name: "Богдан", like: "1", createdAt: "2019-08-21" },
            { name: "Сергій", like: "5", createdAt: "2019-03-17" },
            { name: "Катя", like: "2", createdAt: "2019-06-12" },
            { name: "Рома", like: "3", createdAt: "2018-04-25" },
            { name: "Мирон", like: "7", createdAt: "2019-03-30" },
            { name: "Даша", like: "2", createdAt: "2019-08-15" },
            { name: "Женя", like: "4", createdAt: "2018-12-16" }
        ]
    }

    sort_to_name = () => {
        this.users = this.users.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.setState({
            title: "Ім`я"
        })
    }

    sort_to_like = () => {
        this.users = this.users.sort((a, b) => (a.like < b.like) ? 1 : -1)
        this.setState({
            title: "Лайки"
        })
    }

    sort_to_date = () => {
        this.users = this.users.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        this.setState({
            title: "Дата"
        })
    }

    render() {
        document.title = this.state.title
        return (
            <>
                <h1> Список користувачів </h1>
                <hr />
                <nav>
                    <button onClick={this.sort_to_name} style={{ backgroundColor: this.state.title == "Ім`я" ? 'grey' : ''}}> Ім'я </button>
                    <button onClick={this.sort_to_like} style={{ backgroundColor: this.state.title == "Лайки" ? 'grey' : ''}}> Лайки </button>
                    <button onClick={this.sort_to_date} style={{ backgroundColor: this.state.title == "Дата" ? 'grey' : ''}}> Дата </button>
                </nav>
                <hr />
                <table>
                    <tbody>
                        <th> Ім'я </th>
                        <th> Лайки </th>
                        <th> Дата </th>
                    </tbody>
                    {
                        this.users.map((el) => <tr>
                            <td> {el.name} </td>
                            <td> {el.like} </td>
                            <td> {el.createdAt} </td>
                        </tr>)
                    }
                </table>
            </>
        );
    }
}

export default UsersList;