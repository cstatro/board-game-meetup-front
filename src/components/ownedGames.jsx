import React from "react";

const OwnedGames = props => {
  const { games } = props;
  return (
    <div className="owned-games">
      {games.map((game, index) => (
        <div key={index} className="user-games">
          <p>{game.name}</p>
          <p>
            <img src={game.image} alt={game.name} />
          </p>
          <p>
            Players: {game.min_players} - {game.max_players}
          </p>
          <p>
            Playtime: {game.min_playtime} - {game.max_playtime} minutes
          </p>
        </div>
      ))}
    </div>
  );
};

export default OwnedGames;
