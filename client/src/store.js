import {createStore} from "redux"
import rootreducer from "./redux/reducers/main"

const store=createStore(
    rootreducer
)

export default store;