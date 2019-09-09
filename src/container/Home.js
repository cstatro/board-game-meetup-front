import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import UserCard from '../components/UserCard'


export class Home extends Component {

    render() {
        console.log("HOME PROPS", this.props.user.name)
        return (
            <div>
                <h1>Welcome back {this.props.user.name}</h1>
            </div>

        )
    }
}

export default Home
