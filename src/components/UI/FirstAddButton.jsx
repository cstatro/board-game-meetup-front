import React from "react";

const FirstAddButton = props => {
  const { handleClick, newGame } = props;
  return (
    <button
      onClick={() => handleClick(newGame)}
      className="btn btn-lg btn-dark"
    >
      Be The First To Own This Game!
    </button>
  );
};

export default FirstAddButton;
