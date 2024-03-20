import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

export default class ViewProduct extends Component {
	
	constructor(props){
		
		super(props);
		this.state ={ post:[]};
	}
	
	
	componentDidMount(){
		
		Axios.get(`http://localhost:4200/getproducts`)
		.then(res => { 
		  // console.log(res);
		   if(res.status == 200){
			   this.setState({post:res.data});
		   }
		})
		.catch(err => console.log(err));
		
	}
	
	onDelete = e =>{
		//console.log("delete");
		e.preventDefault();
		const id = e.target.id;
		console.log(id);
		Axios.post(`http://localhost:4200/delete/${id}`).then(res => {
			console.log(res);
			
		});
	};


render(){
	return(
	   <div>
	     <table>
		    <tr>
			   
				<th>Product Name</th>
				<th>Description</th>
				<th>Image</th>
				<th>Delete</th>
			</tr>
			<tbody>
			{this.state.post.map((item, index) => {
				
				return(
				    <tr key={index}>
						<td>{item.name}</td>
						<td>{item.description}</td>
						<td><img src={item.time} height="100px" width="100px"/></td>
						<td>
						  <button className="btn btn-danger" id={item.id} onClick={this.onDelete} >Delete</button>
						</td>
						
					</tr>
					);
			})}
			</tbody>
		</table>
	</div>
	);
    }				
			 	
}	

