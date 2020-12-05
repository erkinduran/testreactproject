const UserAction = u => ( {
	type: 'USER',
	payload: u,
} );

const UsersAction = u => ( {
	type: 'USERS',
	payload: u,
} );

const displayUserAction=u=>({
	type: 'DISPLAY_USER',
	payload: u
})

export {
	UsersAction,
	UserAction,
	displayUserAction
}