import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'

export class SignUp extends Component {

    state = {
        name: "",
        bio: "",
        profile_pic: ""
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.setUser(data)
                localStorage.setItem('userId', data.id)
                this.props.history.push('/games')

            })

        this.setState({
            name: "",
            bio: "",
            profile_pic: ""
        })
    }

    render() {
        return (
            <div>
                <samp>No account yet? Signup</samp>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Username:</label>
                        <input type="text" class="form-control" name="name" value={this.state.name} placeholder="Username" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Biography:</label>
                        <input type="text" class="form-control" name="bio" value={this.state.bio} placeholder="Biography" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Profile Picture URL:</label>
                        <input type="text" class="form-control" name="profile_pic" value={this.state.profile_pic} placeholder="Profile Picture" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <Link className="navbar-brand" to="/login">Back to Login</Link>
            </div>
        )
    }
}

export default withRouter(SignUp)
