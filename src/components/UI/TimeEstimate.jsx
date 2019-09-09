import React from "react";
const TimeEstimate = props => {
  const { selectedGame } = props;
  return (
    <div className="form-group">
      <label for="exampleFormControlInput1">Estimated Game Length</label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="120 minutes"
        readOnly
        value={selectedGame ? selectedGame.min_playtime : "Please Select Game"}
      />
    </div>
  );
};

export default TimeEstimate;
