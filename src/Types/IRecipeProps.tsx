import User from "../Models/User"

export default interface IRecipeProps {
	users?: User[];
	user?: User;
	displayUser?: boolean;
	UsersAction?: any;
	UserAction?: any;
	displayUserAction?: any;
}