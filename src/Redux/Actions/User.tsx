const UserAction = u => ( {
	type: 'USER',
	payload: u,
} );

let UsersAction = u => ( {
	type: 'USERS',
	payload: u,
} );

export {
	UsersAction,
	UserAction
}