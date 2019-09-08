import React from "react";

const GameShowOptions = props => {
  const { owners, user } = props;
  const alreadyOwned = owners.includes(user);

  // TODO implement already owned Ternary to show a remove from my collection button when viewing a game
  return (
    <React.Fragment>
      <button className="btn btn-lg btn-dark">Add To My Collection</button>
      <button className="btn btn-lg btn-dark">Some People Own this Game</button>
    </React.Fragment>
  );
};

export default GameShowOptions;
