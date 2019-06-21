import { createStore } from 'redux'
import regularsReducers from "../reducers"

let initialStore = localStorage.getItem("r-store")?
    {regulars:JSON.parse(localStorage.getItem("r-store"))}
    : {regulars:{}}
 console.log('red',regularsReducers);

export default createStore(regularsReducers, initialStore)