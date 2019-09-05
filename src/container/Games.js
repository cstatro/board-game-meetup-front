import React, { Component } from 'react'
import GameCard from '../components/GameCard'
import SearchGame from '../components/SearchGame'

export class Games extends Component {
    state = { searchGame: "" }



    render() {
        let gameComponents = this.props.allGames.map(game => <GameCard game={game} />)
        return (
            <div>
                <samp>
                    <SearchGame />
                    {gameComponents}
                </samp>
            </div>
        )
    }
}

export default Games
