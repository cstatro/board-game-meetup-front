import React from "react";
const RemoveFromCollection = props => {
  const { handleClick } = props;
  return (
    <button onClick={handleClick} className="btn btn-lg btn-danger">
      Remove From My Collection
    </button>
  );
};

export default RemoveFromCollection;
