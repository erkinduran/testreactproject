import User from "../../Models/User"

export default function UserReducer ( state = new User(0,"","","","","","","","","","","","","",""), action )
{
	switch ( action.type )
	{
		case 'USER':
			return action.payload;
		default:
			return state;
	}
}