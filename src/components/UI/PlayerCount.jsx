import React from "react";
const R = require("ramda");

const PlayerCount = props => {
  const { max_players, min_players } = props.selectedGame;
  const numArr = R.range(min_players, max_players + 1);
  return (
    <select
      name="player_count"
      className="form-control"
      id="exampleFormControlSelect1"
    >
      {numArr.map(n => (
        <option key={n} value={n}>
          {n}
        </option>
      ))}
    </select>
  );
};

export default PlayerCount;
