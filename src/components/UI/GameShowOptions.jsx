import React from "react";
import AddToCollection from "./AddToCollection";
import RemoveFromCollection from "./RemoveFromCollection";

const GameShowOptions = props => {
  const { owners, user } = props;
  const alreadyOwned = owners.map(o => o.id).includes(user.id);
  console.log(alreadyOwned);

  // TODO implement already owned Ternary to show a remove from my collection button when viewing a game
  return (
    <React.Fragment>
      {alreadyOwned ? <RemoveFromCollection /> : <AddToCollection />}
      <button className="btn btn-lg btn-dark">Some People Own this Game</button>
    </React.Fragment>
  );
};

export default GameShowOptions;
