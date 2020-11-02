import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import events from "./events";
import todos from "./todos"

export default combineReducers({ events, todos, visibilityFilter });
