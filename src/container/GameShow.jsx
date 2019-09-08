import React, { Component } from "react";
import FirstAddButton from "../components/UI/FirstAddButton";
import GameShowOptions from "../components/UI/GameShowOptions";

class GameShow extends Component {
  state = { owners: [], inDataBase: null };

  componentDidMount() {
    const { name } = this.props;
    fetch(`http://localhost:3000/games/${name}`)
      .then(r => r.json())
      .then(data => this.setState({ owners: data.users, inDataBase: true }))
      .catch(e => this.setState({ inDataBase: false }));
  }

  render() {
    const { name, image_url } = this.props;
    const { inDataBase } = this.state;

    return (
      <div className="game-show">
        <h1>{name}</h1>
        <div className="display-info">
          <img src={image_url} alt={name} />
        </div>
        <div className="available-actions">
          {inDataBase ? <GameShowOptions /> : <FirstAddButton />}
        </div>
      </div>
    );
  }
}

export default GameShow;
