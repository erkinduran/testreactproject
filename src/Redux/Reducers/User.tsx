import { User } from "../../Models"

export default function UserReducer ( state = User, action )
{
	switch ( action.type )
	{
		case 'HEADER_DISPLAY':
			return action.payload;
		default:
			return state;
	}
}