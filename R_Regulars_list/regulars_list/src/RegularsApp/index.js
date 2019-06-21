import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import RegularsApp from './containers/RegularsApp'
import { createStore } from 'redux'
import regularsReducers from './reducers'
import store from "./store"

const renderRegularsList = () => {
    localStorage.setItem("r-store", JSON.stringify(store.getState().regulars));
    ReactDOM.render(
        <RegularsApp store={store}/>,
        document.getElementById("root")
    )
}

store.subscribe(renderRegularsList)
export default renderRegularsList