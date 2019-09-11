import React from "react";
import "./App.css";
import NavBar from "./container/NavBar";
import Games from "./container/Games";
import Home from "./container/Home";
import Meetups from "./container/Meetups";
import Login from "./container/Login";
import SignUp from "./container/SignUp";
import GameShow from "./container/GameShow";
import { MeetupForm } from "./container/MeetupForm";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends React.Component {
  state = { allGames: [], user: null, reRenderUser: false };

  setUser = userLogin => {
    this.setState({ user: userLogin });
  };
  triggerUserFetch = () => {
    this.setState({ reRenderUser: true });
  };

  componentDidMount() {
    fetch(
      `https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=SB1VGnDv7M`
    )
      .then(res => res.json())
      .then(data => this.setState({ allGames: data.games }));

    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`http://localhost:3000/autologin`, {
        headers: {
          accept: "application/json",
          Authorization: userId
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ user: data });
        });
    }
  }
  componentDidUpdate() {
    if (this.state.reRenderUser) {
      const { id } = this.state.user;
      fetch(`http://localhost:3000/users/${id}`)
        .then(r => r.json())
        .then(user => this.setState({ user }));
      this.setState({ reRenderUser: false });
    }
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        {user ? (
          <React.Fragment>
            <NavBar user={this.state.user} setUser={this.setUser} />
            <Switch>
              <Route
                path="/home"
                render={() => {
                  return (
                    <div>
                      <Home
                        triggerUserFetch={this.triggerUserFetch}
                        user={this.state.user}
                      />
                    </div>
                  );
                }}
              />
              <Route
                path="/meetup/new"
                render={props => {
                  const { push } = props.history;
                  return (
                    <div>
                      <MeetupForm push={push} user={user} />
                    </div>
                  );
                }}
              />
              <Route
                path="/meetups"
                render={() => {
                  return (
                    <div>
                      <Meetups user={this.state.user} />
                    </div>
                  );
                }}
              />
              <Route
                path={`/games/:name`}
                render={props => {
                  const { game } = props.history.location;
                  return (
                    <div>
                      <GameShow user={user} {...game} />
                    </div>
                  );
                }}
              />
              <Route
                path="/games"
                render={() => {
                  return (
                    <div>
                      <Games allGames={this.state.allGames} />
                    </div>
                  );
                }}
              />
              <Route
                path="/login"
                render={() => {
                  return (
                    <div>
                      <Login setUser={this.setUser} user={this.state.user} />
                    </div>
                  );
                }}
              />
              <Route
                path="/signup"
                render={() => {
                  return (
                    <div>
                      <SignUp setUser={this.setUser} user={this.state.user} />
                    </div>
                  );
                }}
              />
            </Switch>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavBar user={this.state.user} setUser={this.setUser} />
            <Switch>
              <Route
                path="/login"
                render={() => {
                  return (
                    <div>
                      <Login setUser={this.setUser} user={this.state.user} />
                    </div>
                  );
                }}
              />
              <Route
                path="/signup"
                render={() => {
                  return (
                    <div>
                      <SignUp setUser={this.setUser} user={this.state.user} />
                    </div>
                  );
                }}
              />
            </Switch>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(App);
