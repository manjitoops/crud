import React,  {Component}  from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { post: [] };
  }
  onChangeHostName = e => {};

  componentDidMount() {
    Axios.get("http://localhost:4200/serverports")
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({ post: res.data });
        }
      })
      .catch(err => console.log(err));
  }

  onDelete = e => {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);
    Axios.post(`http://localhost:4200/delete/${id}`).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
	  
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Port</th>
            <th>Delete</th>
            <th>Edit </th>
          </tr>
          <tbody>
            {this.state.post.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.port}</td>
                  <td>
                    <button
                      
                      id={item._id}
                      onClick={this.onDelete}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/edit/${item._id}`} >
                      Edit
                    </Link>
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
