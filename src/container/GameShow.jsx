import React, { Component } from "react";

class GameShow extends Component {
  state = { owners: [] };

  onComponentDidMount() {
    const { name } = this.props.value.location.game;
    console.log(name);
  }
  render() {
    // const { name } = this.props.value.location.game;
    // console.log(this.props);
    return (
      <div className="game-show">
        <div></div>
      </div>
    );
  }
}

export default GameShow;
