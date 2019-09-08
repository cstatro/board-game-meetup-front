import React from "react";
const SelectGame = props => {
  const { games } = props;
  return (
    <select className="custom-select mr-sm-2" name="game_id">
      {games.map(g => (
        <option value={g.id}>{g.name}</option>
      ))}
    </select>
  );
};

export default SelectGame;
