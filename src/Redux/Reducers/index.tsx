import {
	combineReducers,
} from 'redux';
import UserReducer from "./User"

export const reducers = combineReducers ( { UserReducer:UserReducer } )