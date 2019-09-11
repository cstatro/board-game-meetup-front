import React, { Component } from "react";
import OwnedGames from "../components/ownedGames";

export class Home extends Component {
  state = { userGames: [] };

  componentDidMount() {
    fetch(`http://localhost:3000/user_games/${this.props.user.id}`)
      .then(res => res.json())
      .then(data => this.setState({ userGames: data }));
  }

  render() {
    return (
      <div className="user-card">
        <h1>Welcome back {this.props.user.name}</h1>
        <img src={this.props.user.profile_pic} alt={this.props.user.name} />
        <p>{this.props.user.bio}</p>
        <OwnedGames games={this.state.userGames} />
      </div>
    );
  }
}

export default Home;
