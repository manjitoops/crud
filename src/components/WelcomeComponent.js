import React, { Component } from 'react';
import axios from 'axios';
import ViewProduct from './ViewProduct';
import { BrowserRouter as Router, Switch,Route,Link }from 'react-router-dom';

export default class CreateComponent extends Component {
	render(){
		return(
		<div>
		<h3>Welcome  To User Section </h3>
		<Router>
		   <div>
		       
				    <ul>
					    
						<li><Link to={'/viewproduct'} >View Products</Link></li>
						
										
					</ul>
				
				
				
				
				<Switch>
				   
					<Route exact path='/viewproduct' component ={ViewProduct} />
					
				</Switch>
		   </div>
		</Router>
		
		</div>
		
		)
	}
	
	
	
}