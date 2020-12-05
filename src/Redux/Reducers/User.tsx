import User from "../../Models/User"

export function UserReducer ( state = new User(0,"","","","","","","","","","","","","",""), action )
{
	switch ( action.type )
	{
		case 'USER':
			return action.payload;
		default:
			return state;
	}
}

export function UsersReducer ( state = [], action )
{
	switch ( action.type )
	{
		case 'USERS':
			return action.payload;
		default:
			return state;
	}
}

export function displayUserReducer(state=false, action){
	switch(action.type){
		case 'DISPLAY_USER':
			return action.payload;
		default:
			return state;
	}
}