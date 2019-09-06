import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./container/NavBar";
import Games from "./container/Games";
import Home from "./container/Home";
import Meetup from "./container/Meetup";
import Meetups from "./container/Meetups";
import Login from "./container/Login";
import GameShow from "./container/GameShow";
import { Route, Switch, Link } from "react-router-dom";

class App extends React.Component {

  state = { allGames: [], allUsers: [], user: null }

  componentDidMount() {
    fetch(
      `https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=SB1VGnDv7M`
    )
      .then(res => res.json())
      .then(data => this.setState({ allGames: data.games }));

    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(data => this.setState({ allUsers: data }));
  }



  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/home"
            render={() => {
              return (
                <div>
                  <Home allUsers={this.state.allUsers} />
                </div>
              );
            }}
          />
          <Route
            path="/meetup/new"
            render={() => {
              return (
                <div>
                  <Meetup />
                </div>
              );
            }}
          />
          <Route
            path="/meetups"
            render={() => {
              return (
                <div>
                  <Meetups />
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
                  <GameShow {...game} />
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
                  <Login />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
