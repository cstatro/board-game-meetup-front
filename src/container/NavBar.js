import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        {this.props.user != null ?
          (<div>
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login / Signup
                </Link>
                </li>
              </ul>
            </nav>
          </div>) :
          (<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="#">
                Navbar
          </Link>
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
                    <Link className="nav-link" to="/home">
                      Home
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/meetup/new">
                      New Meetup
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/meetups">
                      Open Meetups
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/games">
                      Games
                </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>)}
      </div>

    );
  }
}

export default NavBar;