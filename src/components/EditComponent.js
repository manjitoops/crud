import React, { Component } from "react";
import Axios from "axios";

export default class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      port: ""
    };
  }
  componentDidMount = e => {
    const id = this.props.match.params.id;
    console.log(id);
    Axios.get(`http://localhost:4200/get/${id}`).then(res => {
      res = res.data[0];
      this.setState({
        id: id,
        name: res.name,
        port: res.port
      });
    });
  };

  onChangeHostName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangePort = e => {
    this.setState({
      port: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const serverPort = { ...this.state };
    const id = serverPort.id;
    Axios.post(`http://localhost:4200/edit/${id}`, serverPort).then(res =>
      console.log(res.data)
    );
    this.setState({
      name: "",
      port: ""
    });
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
          <div >
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
