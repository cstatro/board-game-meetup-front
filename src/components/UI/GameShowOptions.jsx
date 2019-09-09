import React from "react";
import AddToCollection from "./AddToCollection";
import RemoveFromCollection from "./RemoveFromCollection";

const GameShowOptions = props => {
  const { owners, user, handleAddGame } = props;
  const alreadyOwned = owners.map(o => o.id).includes(user.id);
  console.log(alreadyOwned);

  return (
    <React.Fragment>
      {alreadyOwned ? (
        <RemoveFromCollection handleClick={console.log} />
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
