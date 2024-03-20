import React, { Component } from "react";
import Axios from "axios";

export default class CreateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      port: ""
    };
  }
  componentDidMount = e => {
   // const id = this.props.match.params.id;
  };

  onChangeHostName = e => {
    this.setState({
      name: e.target.value
    });
	console.log(this.state.name);
  };
  onChangePort = e => {
    this.setState({
      port: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const serverPort = { ...this.state };
    Axios.post("http://localhost:4200/add", serverPort).then(res =>
      console.log(res.data)
    );
    /* this.setState({
      name: "",
      port: ""
    }); */
	this.props.history.push("/index");
	
	
  };
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Add New Server</h3>
        <form onSubmit={this.onSubmit}>
          <div >
            <label>Add Host Name: </label>
            <input
              type="text"
              value={this.state.name}
             onChange={this.onChangeHostName}
            />
          </div>
          <div >
            <label>Add Server Port: </label>
            <input
              type="text"
              value={this.state.port}
            
              onChange={this.onChangePort}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Node Server"
             
            />
          </div>
        </form>
      </div>
    );
  }
}
