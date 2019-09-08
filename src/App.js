import React from "react";
import "./App.css";
import NavBar from "./container/NavBar";
import Games from "./container/Games";
import Home from "./container/Home";
import Meetups from "./container/Meetups";
import Login from "./container/Login";
import GameShow from "./container/GameShow";
import { Route, Switch } from "react-router-dom";
import { MeetupForm } from "./container/MeetupForm";

class App extends React.Component {
  state = { allGames: [], allUsers: [], user: { name: "colin", id: 1 } };

  componentDidMount() {
    fetch(
      `https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=SB1VGnDv7M`
    )
      .then(res => res.json())
      .then(data => this.setState({ allGames: data.games }));

    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(allUsers => this.setState({ allUsers }));
  }

  render() {
    const { user } = this.state;
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
                  <MeetupForm user={user} />
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
