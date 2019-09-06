import React from "react";

export default function SearchGame(props) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search Game by Name"
        onChange={event => props.setSearchGameState(event.target.value)}
        value={props.value}
      />
    </div>
  );
}
