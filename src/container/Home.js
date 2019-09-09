import React, { Component } from 'react'

export class Home extends Component {

    render() {
        return (
            <div className="user-card">
                <h1>Welcome back {this.props.user.name}</h1>
                <img src={this.props.user.profile_pic} alt={this.props.user.name} />
                <p>{this.props.user.bio}</p>
            </div>
        )
    }
}

export default Home
