import React from "react";
import AddToCollection from "./AddToCollection";
import RemoveFromCollection from "./RemoveFromCollection";

const GameShowOptions = props => {
  const { owners, user, handleAddGame, game_id } = props;
  const alreadyOwned = owners.map(o => o.id).includes(user.id);
  console.log(alreadyOwned);

  return (
    <React.Fragment>
      {alreadyOwned ? (
        <RemoveFromCollection
          game_id={game_id}
          user_id={user.id}
          handleClick={console.log}
        />
      ) : (
        <AddToCollection handleClick={handleAddGame} />
      )}
      <button className="btn btn-lg btn-dark">
        (Implement Me!) People Own this Game
      </button>
    </React.Fragment>
  );
};

export default GameShowOptions;
