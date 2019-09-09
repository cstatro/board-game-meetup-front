import React, { Component } from 'react'
import UserCard from '../components/UserCard'

export class Home extends Component {

    state = { userGames: [] }

    componentDidMount() {
        fetch(`http://localhost:3000/user_games/${this.props.user.id}`
        )
            .then(res => res.json())
            .then(data => this.setState({ userGames: data }));
    }

    render() {
        console.log(this.state.userGames)
        return (
            <div className="user-card">
                <h1>Welcome back {this.props.user.name}</h1>
                <img src={this.props.user.profile_pic} alt={this.props.user.name} />
                <p>{this.props.user.bio}</p>
                {this.state.userGames.map(game =>
                    <div className="owned-games">
                        <p>Game Name: {game.name}</p>
                        <p>
                            <img src={game.image} alt={game.name} />{" "}
                        </p>
                        <p>
                            Players: {game.min_players} - {game.max_players}
                        </p>
                        <p>
                            Playtime: {game.min_playtime} - {game.max_playtime} minutes
                        </p>
                    </div>
                )}
            </div>
        )
    }
}

export default Home
