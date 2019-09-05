import React from 'react'

export default function GameCard(props) {
    return (
        <div class="gamesContainer">
            <div class="card">
                <img src={props.game.image_url} class="card-img-top" alt={props.game.name} />
                <div class="card-body">
                    <h5 class="card-title">{props.game.name}</h5>
                    <p class="card-text">""</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Minimum Players: {props.game.min_players}</li>
                    <li class="list-group-item">Maximum Players: {props.game.max_players}</li>
                    <li class="list-group-item">Minimum Play Time: {props.game.min_playtime} minutes</li>
                    <li class="list-group-item">Maximum Play Time: {props.game.max_playtime} minutes</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Add/Remove From Collection</a>
                </div>
            </div>
        </div>
    )
}
