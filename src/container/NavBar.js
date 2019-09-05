import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/meetup/new">New Meetup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/meetups">Open Meetups</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/games">Games</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login / Signup</a>
                            </li>
                        </ul>
                    </div>
                </nav>


            </div>
        )
    }
}

export default NavBar
