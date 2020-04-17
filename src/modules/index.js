import input from "./input"
import todos from "./todo"
import { combineReducers } from "redux"

export default combineReducers({
    input,
    todos
});