import React from 'react';
import './App.css';
import {
	UserAction,
	UsersAction,
} from './Redux/Actions';
import connect from 'react-redux/es/connect/connect';

import IRecipeProps from "./Types/IRecipeProps"
import IRecipeState from "./Types/IRecipeState"

import User from "./Models/User"

import {get} from "./functions"

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends React.Component<IRecipeProps, IRecipeState>
{
	users: User[] = [];

	componentDidMount(){
		this.getData()
	}

	getData(){
		get("http://localhost:3000/users",res=>{
			const {UsersAction} = this.props; 
			for(let i in res){
				const item=res[i]
				let newItem = new User(
					item.id,
					item.name,
					item.username,
					item.email,
					item.address.street,
					item.address.suite,
					item.address.city,
					item.address.zipcode,
					item.address.geo.lat,
					item.address.geo.lng,
					item.phone,
					item.website,
					item.company.name,
					item.company.catchPhrase,
					item.company.bs
				)
				this.users.push(newItem)
			}
			UsersAction(this.users)
		},null)
	}

	render(){
		return (
			<div className="container">
				
				<Header />
				
				<Body />
				
				<Footer />
			
			</div>
		);
	}
}

const mapDispatchToProps = {
	UserAction,
	UsersAction,
};

const mapStateToProps = state => state;

export default connect ( mapStateToProps, mapDispatchToProps ) ( App );
