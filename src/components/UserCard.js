import React from 'react'
import { userInfo } from 'os';

export default function UserCard(props) {
    return (
        <div>
            <div className="user-card">
                <h1>{props.user.name}</h1>
                <img src={props.user.profile_pic} alt={props.user.name} />
                <p>{props.user.bio}</p>
                <p>Games: </p>
                {props.user.games.map((game, index) =>
                    <div>
                        <ol>
                            <li>Name: {game.name}</li>
                            <p><img src={game.image} alt={game.name} /> </p>
                            <p>Players: {game.min_player} - {game.max_player}</p>
                            <p>Playtime: {game.min_playtime} - {game.max_playtime} minutes</p>
                        </ol>
                    </div>
                )}
            </div>
        </div>
    )
}
