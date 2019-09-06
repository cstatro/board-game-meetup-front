import React, { Component } from "react";

class GameShow extends Component {
  state = { owners: [] };

  onComponentDidMount() {}
  render() {
    const { name, image_url } = this.props;

    return (
      <div className="game-show">
        <h1>{name}</h1>
        <div className="display-info">
          <img src={image_url} alt={name} />
        </div>
        <div></div>
      </div>
    );
  }
}

export default GameShow;
