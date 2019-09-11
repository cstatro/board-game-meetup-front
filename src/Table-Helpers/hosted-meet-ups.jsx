export const hostedGameColumns = () => [
  {
    //Header: "Estimated Start Time",
    accessor: "start_time"
  },

  {
    //Header: "Game",
    accessor: "game.name"
  },
  {
    //Header: "Player Count",
    accessor: "player_count"
  }

  // {
  //   Header: "Host",
  //   accessor: "host"
  // },
  // {
  //   id: "id",
  //   accessor: meetup => meetup.id,
  //   Header: "Join",
  //   Cell: props => (
  //     <button onClick={() => this.handleJoinMeetup(props.value)}>Join</button>
  //   )
  // }
];
