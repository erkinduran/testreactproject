import axios from 'axios';

export default async function get ( url, callback, error_callback )
{
	const response = await axios
	.get ( url )
	.then ( function ( response )
	{
		if ( typeof callback === 'function' ) callback ( response.data );
	} )
	.catch ( function ( error )
	{
		if ( typeof error_callback === 'function' ) error_callback ( error );
	} );
}
