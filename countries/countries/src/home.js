import React, { Component } from 'react';
import './App.css';
import auth0Client from './auth';
import Countries from './components/countries'

class home extends Component {
    componentDidMount() {
        if (!auth0Client.isAuthenticated()) {
            auth0Client.signIn();
        }
    }
    signOut = () => {
        auth0Client.signOut();
        this.props.history.replace('/');
    }
    render() {

        return (
            <div className="App" >
                <div>
                    {
                        auth0Client.isAuthenticated() &&
                        <>
                            <div className="nav">
                                <label className="name">{auth0Client.getProfile().name}</label>
                                <button className="btn" onClick={() => { this.signOut() }}>Sign Out</button>
                            </div>
                            <hr />
                            <Countries />
                            <br />
                        </>
                    }
                </div>
            </div>
        )
    }

}

export default home;