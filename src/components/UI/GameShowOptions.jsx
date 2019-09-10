import React from "react";
import { useEffect, useState } from "react";
import AddToCollection from "./AddToCollection";
import RemoveFromCollection from "./RemoveFromCollection";

const GameShowOptions = props => {
  const { owners, user, handleAddGame, game_id, handleRemoveCopy } = props;

  const [alreadyOwned, setAlreadyOwned] = useState(false);

  useEffect(() => {
    setAlreadyOwned(owners.map(o => o.id).includes(user.id));
  });

  return (
    <React.Fragment>
      {alreadyOwned ? (
        <RemoveFromCollection
          game_id={game_id}
          user_id={user.id}
          handleRemoveCopy={handleRemoveCopy}
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
