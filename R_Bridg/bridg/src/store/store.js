import { createStore } from "redux"
import Reducers from "../reducers/index"

let initialStore = localStorage.getItem("game") ?
    {card:JSON.parse(localStorage.getItem("geme"))}
    : {card:{}};

export default createStore(Reducers, initialStore)
