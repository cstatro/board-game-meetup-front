import React, { Component } from "react";
import FirstAddButton from "../components/UI/FirstAddButton";
import GameShowOptions from "../components/UI/GameShowOptions";
import { postConfig } from "../api/config";
import { postUserGame, GAMES } from "../api/postCalls";

class GameShow extends Component {
  state = { owners: [], inDataBase: null, createOwnedCopy: null };

  componentDidMount() {
    const { owners } = this.state;
    const { name, user } = this.props;
    fetch(`http://localhost:3000/games/${name}`)
      .then(r => r.json())
      .then(data => this.setState({ owners: data.users, inDataBase: true }))
      .catch(e => this.setState({ inDataBase: false }));
  }
  componentDidUpdate() {
    const { createOwnedCopy, owners } = this.state;
    const { user } = this.props;
    const { id: user_id } = this.props.user;
    if (createOwnedCopy) {
      const obj = { game_id: createOwnedCopy, user_id };
      const config = postConfig(obj);
      postUserGame(config);
      const owners = [...this.state.owners, this.props.user];
      this.setState({ createOwnedCopy: null, owners, inDataBase: true });
    }
  }

  handleFirstGameAdd = obj => {
    const config = postConfig(obj);
    fetch(GAMES, config)
      .then(r => r.json())
      .then(json => this.setState({ createOwnedCopy: json.id }));
  };

  render() {
    const {
      name,
      image_url,
      user,
      max_players,
      min_players,
      max_playtime,
      min_playtime
    } = this.props;
    const { inDataBase, owners } = this.state;
    const newGame = {
      name,
      image: image_url,
      max_players,
      min_players,
      min_playtime,
      max_playtime
    };

    return (
      //clean this up if time
      <div className="game-show">
        <h1>{name}</h1>
        <div className="display-info">
          <img src={image_url} alt={name} />
        </div>
        <div className="available-actions">
          {inDataBase ? (
            <GameShowOptions owners={owners} user={user} />
          ) : (
            <FirstAddButton
              handleClick={this.handleFirstGameAdd}
              newGame={newGame}
              user_id={user.id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GameShow;
