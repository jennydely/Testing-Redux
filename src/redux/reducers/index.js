import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import events from "./events";
import packlists from "./packlists"

export default combineReducers({ events, packlists, visibilityFilter });
