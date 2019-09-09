import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

export class Login extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('userId', data.user.id)
        this.props.setUser(data.user)
        this.props.history.push('/home')
      })

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      < div >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="formGroupExampleInput2">Username</label>
            <input type="text" class="form-control" name="name" value={this.state.name} placeholder="Username" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Save Information
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div >
    );
  }
}

export default withRouter(Login);
