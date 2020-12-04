import React from 'react';
import './App.css';
import {
	UserAction,
} from './Redux/Actions';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App ()
{
	return (
		<div className="container">
			
			<Header />
			
			<Body />
			
			<Footer />
		
		</div>
	);
}

const mapDispatchToProps = {
	UserAction,
};

const mapStateToProps = state => state;

export default connect ( mapStateToProps, mapDispatchToProps ) ( App );
