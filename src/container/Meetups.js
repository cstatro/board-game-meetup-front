import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class Meetups extends Component {

    state = { allMeetUps: [] }

    componentDidMount() {
        fetch(`http://localhost:3000/meetups`)
            .then(res => res.json())
            .then(data => this.setState({ allMeetUps: data }))
    }

    render() {
        const { allMeetUps } = this.state
        const columns = [{
            Header: 'Date & Start Time',
            accessor: 'start_time'
        },
        {
            Header: 'Date & End Time',
            accessor: 'end_time'
        },
        {
            Header: 'Game',
            accessor: 'game_id'
        },
        {
            Header: 'Player Count',
            accessor: 'player_count'
        },
        {
            id: 'id',
            Header: "Join",
            Cell: <button>Join</button>
        }
        ]

        return (
            <div>
                {this.state.allMeetUps.length === 0 ? <h1>Loading</h1> : (<ReactTable
                    data={this.state.allMeetUps}
                    columns={columns}
                />)}
            </div>

        )
    }

}

export default Meetups