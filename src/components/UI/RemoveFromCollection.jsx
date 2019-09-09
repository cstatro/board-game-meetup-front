import React from "react";
import { useEffect, useState } from "react";
import { deleteUserGame } from "../../api/postCalls";
const RemoveFromCollection = props => {
  const [targetRemoval, removeTarget] = useState(false);
  const { handleClick, game_id, user_id } = props;
  useEffect(() => {
    if (targetRemoval) {
      removeTarget(!targetRemoval);
      deleteUserGame(user_id, game_id);
    }
  });
  return (
    <button
      onClick={() => removeTarget(!targetRemoval)}
      className="btn btn-lg btn-danger"
    >
      Remove From My Collection
    </button>
  );
};

export default RemoveFromCollection;
