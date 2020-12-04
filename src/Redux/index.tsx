import {
	createStore,
}                   from 'redux';
import { reducers } from './Reducers';

export function configureStore ( initialState = {} )
{
	return createStore ( reducers, initialState );
}

export const store = configureStore ();