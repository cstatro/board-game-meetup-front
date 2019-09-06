import React from "react";

export default function GameCard(props) {
  return (
    <div className="game-row">
      <div className="card">
        <img
          src={props.game.image_url}
          className="card-img-top"
          alt={props.game.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.game.name}</h5>
          <p className="card-text">""</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Minimum Players: {props.game.min_players}
          </li>
          <li className="list-group-item">
            Maximum Players: {props.game.max_players}
          </li>
          <li className="list-group-item">
            Minimum Play Time: {props.game.min_playtime} minutes
          </li>
          <li className="list-group-item">
            Maximum Play Time: {props.game.max_playtime} minutes
          </li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Add/Remove From Collection
          </a>
        </div>
      </div>
    </div>
  );
}
