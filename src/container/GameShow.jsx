import React, { Component } from "react";
import FirstAddButton from "../components/UI/FirstAddButton";
import GameShowOptions from "../components/UI/GameShowOptions";
import { postConfig } from "../api/config";
import { postUserGame, GAMES } from "../api/postCalls";

class GameShow extends Component {
  state = {
    game_id: null,
    owners: [],
    inDataBase: null,
    createOwnedCopy: null
  };

  componentDidMount() {
    const { name } = this.props;
    fetch(`http://localhost:3000/games/${name}`)
      .then(r => r.json())
      .then(data =>
        this.setState({
          game_id: data.id,
          owners: data.users,
          inDataBase: true
        })
      )
      .catch(e => this.setState({ inDataBase: false }));
  }
  componentDidUpdate() {
    const { createOwnedCopy } = this.state;
    const { id: user_id } = this.props.user;
    if (createOwnedCopy) {
      const obj = { game_id: createOwnedCopy, user_id };
      const config = postConfig(obj);
      postUserGame(config);
      const owners = [...this.state.owners, this.props.user];
      this.setState({ createOwnedCopy: null, owners, inDataBase: true });
    }
  }
  handleAddGame = () => this.setState({ createOwnedCopy: this.state.game_id });

  handleRemoveCopy = () => {
    const { user } = this.props;
    const owners = this.state.owners.filter(o => o.id != user.id);
    this.setState({ owners });
  };

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
    const { inDataBase, owners, game_id } = this.state;
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
            <GameShowOptions
              handleAddGame={this.handleAddGame}
              handleRemoveCopy={this.handleRemoveCopy}
              owners={owners}
              user={user}
              game_id={game_id}
            />
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
