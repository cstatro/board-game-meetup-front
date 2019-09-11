import React, { Component } from "react";
import OwnedGames from "../components/ownedGames";
import HostedMeetUps from "../components/HostedMeetUps";

export class Home extends Component {
  state = { userGames: [] };

  componentDidMount() {
    fetch(`http://localhost:3000/user_games/${this.props.user.id}`)
      .then(res => res.json())
      .then(data => this.setState({ userGames: data }));
  }

  render() {
    const { meetups } = this.props.user;
    return (
      <div className="user-card">
        <h1>Welcome back {this.props.user.name}</h1>
        <img src={this.props.user.profile_pic} alt={this.props.user.name} />
        <p>{this.props.user.bio}</p>
        <h1>{this.props.user.name}'s Owned Games</h1>
        <div className="profile-dashboards">
          <OwnedGames games={this.state.userGames} />
          <HostedMeetUps meetups={meetups} />
        </div>
      </div>
    );
  }
}

export default Home;
