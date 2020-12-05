import {
	combineReducers,
} from 'redux';
import UserReducer from "./User"
import UsersReducer from "./Users"

export const reducers = combineReducers ( { user:UserReducer,users:UsersReducer } )