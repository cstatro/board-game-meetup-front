import React from "react";
const SelectGame = props => {
  const { games, handleGameChange } = props;
  return (
    <select
      onChange={e => handleGameChange(e.target.value)}
      className="custom-select mr-sm-2"
      name="game_id"
    >
      <option value={null}>Please Select A Game</option>
      {games.map(g => (
        <option value={g.id}>{g.name}</option>
      ))}
    </select>
  );
};

export default SelectGame;
//why doesn't value={...g} work? need to look into this...
