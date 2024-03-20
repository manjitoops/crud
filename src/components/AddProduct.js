import React from "react";
import Axios from "axios";

export default class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
	  color:"",
	  qty:"",
	  c_name:"",
	  size:"",
	  description:"",
	  image:""
    };
  }
  onChangeName = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };
  
  onChangePrice = e => {
    e.preventDefault();
    this.setState({
      price: e.target.value
    });
  }; 
  
   onChangeColor = e => {
    e.preventDefault();
    this.setState({
      color: e.target.value
    });
  }; 
  
     onChangeQty = e => {
    e.preventDefault();
    this.setState({
      qty: e.target.value
    });
  }; 
     onChangeSize = e => {
    e.preventDefault();
    this.setState({
      size: e.target.value
    });
  }; 
     onChangeC_name = e => {
    e.preventDefault();
    this.setState({
      c_name: e.target.value
    });
  }; 
     onChangeDescription = e => {
    e.preventDefault();
    this.setState({
      description: e.target.value
    });
  }; 
  
  
  
  
  
  
  
  

  onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", this.uploadInput.files[0]);
    data.append("name", this.state.name);
    data.append("price", this.state.price);
	data.append("color",this.state.color);
	data.append("qty",this.state.qty);
	data.append("size",this.state.size);
	data.append("description",this.state.description);
	data.append("c_name",this.state.c_name);
	
    const time = Date.now();
    data.append("time", time);
    Axios.post("http://localhost:4200/productinsert",data).then(response => console.log(response));
    this.setState({
       name: "",
      price: "",
	  color:"",
	  qty:"",
	  c_name:"",
	  size:"",
	  description:"",
	  image:""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
         Name:
          <input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <br />
		  
		     Description:
          <input  
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <br />
		  
		  
		  
		  Price
		   <input  
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.onChangePrice}
          />
          <br />
		  Color
		   <input 
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.onChangeColor}
          />
          <br />
		  
		  
          Quantity
          <input  
            type="text"
			name="qty"
            value={this.state.qty}
            onChange={this.onChangeQty}
          />
		  	  
          Category of product
		  <select name="c_name">
				<option>Shirt</option>
				<option>Tshirt</option>
				<option>Trouser</option>
				<option>Shoes</option>
		  
		 </select>
		 
		    Size
          <input  type="text"
			name="size"
            value={this.state.size}
            onChange={this.onChangeSize}
          />
		 
		 
    	  Image:
          <input 
            type="file"
            name="image"
            ref={ref => {
              this.uploadInput = ref;
            }}
          />
          <br />
          <input type="submit" value="Add Product"  />
        </form>
      </div>
    );
  }
}
