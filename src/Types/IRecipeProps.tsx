import User from "../Models/User"

export default interface IRecipeProps {
	users?: User[];
	user?: User;
	UsersAction?: any;
}