import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export class NavBar extends Component {
  state = {
    name: ""
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("userId");
    this.props.setUser(null);
    this.props.history.push("/login");
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        {!this.props.user ? (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="#">
                Navbar
              </Link>
              {console.log("logged out")}
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
          </div>
        ) : (
          <div>
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
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#"
                      onClick={this.handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(NavBar);
