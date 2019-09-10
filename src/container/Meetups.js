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

        // const data = [{
        //     name: 'Tanner Linsley',
        //     age: 26,
        //     friend: {
        //         name: 'Jason Maurer',
        //         age: 23,
        //     }
        // },
        // {
        //     name: 'Tanner Linsley',
        //     age: 26,
        //     friend: {
        //         name: 'Jason Maurer',
        //         age: 23,
        //     }
        // },]
        console.log(allMeetUps)
        const columns = [{
            Header: 'Start',
            accessor: 'start_time'
        },
        {
            id: 'id',
            Header: 'id',
            accessor: 'id'
        }
            // , {
            //     Header: 'Age',
            //     accessor: 'age',
            //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            // }, {
            //     id: 'friendName', // Required because our accessor is not a string
            //     Header: 'Friend Name',
            //     accessor: d => d.friend.name // Custom value accessors!
            // }, {
            //     Header: props => <span>Friend Age</span>, // Custom header components!
            //     accessor: 'friend.age'
            // }
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

// render() {
//     const data = [{
//       name: 'Tanner Linsley',
//       age: 26,
//       friend: {
//         name: 'Jason Maurer',
//         age: 23,
//       }
//     },{
//       ...
//     }]

//     const columns = [{
//       Header: 'Name',
//       accessor: 'name' // String-based value accessors!
//     }, {
//       Header: 'Age',
//       accessor: 'age',
//       Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
//     }, {
//       id: 'friendName', // Required because our accessor is not a string
//       Header: 'Friend Name',
//       accessor: d => d.friend.name // Custom value accessors!
//     }, {
//       Header: props => <span>Friend Age</span>, // Custom header components!
//       accessor: 'friend.age'
//     }]

//     return <ReactTable
//       data={data}
//       columns={columns}
//     />
//   }