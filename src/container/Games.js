import React, { Component } from "react";
import GameCard from "../components/GameCard";
import SearchGame from "../components/SearchGame";

export class Games extends Component {
  state = { searchGame: "" };

  setSearchGameState = search => {
    this.setState({ searchGame: search });
  };

  filterGames = () => {
    let filteredGames = this.props.allGames.filter(game =>
      game.name.toLowerCase().includes(this.state.searchGame.toLowerCase())
    );
    return filteredGames;
  };

  render() {
    let gameComponents = this.filterGames().map(game => (
      <GameCard key={game.id} game={game} />
    ));
    return (
      <div>
        <samp>
          <SearchGame
            value={this.state.searchGame}
            setSearchGameState={this.setSearchGameState}
          />
          {gameComponents}
        </samp>
      </div>
    );
  }
}

export default Games;
