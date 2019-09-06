import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/meetup/new">
                  New Meetup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/meetups">
                  Open Meetups
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/games">
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login / Signup
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
