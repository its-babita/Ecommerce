import {createStore} from "redux"
import rootreducer from "./Services/Reducers/main"

const store=createStore(
    rootreducer
)

export default store;