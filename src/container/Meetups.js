import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { withRouter } from 'react-router-dom'

export class Meetups extends Component {

    state = { openMeetUps: [], meetup_id: null }

    componentDidMount() {
        fetch(`http://localhost:3000/meetups/${this.props.user.id}`)
            .then(res => res.json())
            .then(data => this.setState({ openMeetUps: data }))
    }

    handleJoinMeetup = (meetupId) => {

        fetch(`http://localhost:3000/meet_up_members`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                meetup_id: meetupId,
                user_id: this.props.user.id,
                host: false
            })
        })
        this.props.history.push('/meetups')
    }

    render() {
        const { openMeetUps } = this.state
        const columns = [{
            Header: 'Estimated Start Time',
            accessor: 'start_time'
        },
        {
            Header: 'Estimated End Time',
            accessor: 'end_time'
        },
        {
            Header: 'Game',
            accessor: 'game.name'
        },
        {
            Header: 'Player Count',
            accessor: 'player_count'
        },
        {
            Header: "Open Seat",
            accessor: "open_seat"
        },
        {
            Header: "Host",
            accessor: "host"
        },
        {
            id: 'id',
            accessor: meetup => meetup.id,
            Header: "Join",
            Cell:
                (props) => <button onClick={() => this.handleJoinMeetup(props.value)}>Join</button>
        }
        ]

        return (
            <div>
                {this.state.openMeetUps.length === 0 ? <h1>No Meet Ups Exist</h1> : (<ReactTable
                    data={this.state.openMeetUps}
                    columns={columns}
                />)}
            </div>

        )
    }

}

export default withRouter(Meetups)