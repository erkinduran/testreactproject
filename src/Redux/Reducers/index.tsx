import {
	combineReducers,
} from 'redux';
import {UserReducer,displayUserReducer,UsersReducer} from "./User"

export const reducers = combineReducers ( { user:UserReducer,users:UsersReducer,displayUser:displayUserReducer } )