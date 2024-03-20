import React,{Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch,Route,Link }from 'react-router-dom';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';


export default class AdminComponent extends Component{
	
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div>
		<h3>Admin Page</h3>
		<Router>
		   <div >
		        
				    <ul>
					    <li>
						    <Link to={'/addproduct'} >Add Products</Link>
							
						</li>
						<li><Link to={'/viewproduct'} >View Products</Link></li>
						
							
					    </ul>
				
				
				
			
				<Switch>
				    <Route exact path='/addproduct' component ={AddProduct} />
			            <Route exact path='/viewproduct' component ={ViewProduct} />
					
					
				</Switch>
		   </div>
		</Router>
		
		</div>
		
		)
	}
	
	
	
}