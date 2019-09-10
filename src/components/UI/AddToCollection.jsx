import React from "react";
const AddToCollection = props => {
  const { handleClick } = props;
  return (
    <button onClick={handleClick} className="btn btn-lg btn-dark">
      Add To My Collection
    </button>
  );
};

export default AddToCollection;
