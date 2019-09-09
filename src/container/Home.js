import React, { Component } from 'react'
import UserCard from '../components/UserCard'
export class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="user-card">
                <UserCard />
                {/* <h1>Welcome back {this.props.user.name}</h1>
                <img src={this.props.user.profile_pic} alt={this.props.user.name} />
                <p>{this.props.user.bio}</p> */}
            </div>
        )
    }
}

export default Home
