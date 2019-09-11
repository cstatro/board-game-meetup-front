import React from "react";
import ReactTable from "react-table";
import { hostedGameColumns } from "../Table-Helpers/hosted-meet-ups";
const HostedMeetUps = props => {
  const { meetups } = props;
  const columns = [{
    Header: "Date and Start Time",
    accessor: "start_time"
  },
  {
    Header: "Game",
    accessor: "game.name"
  },
  {
    Header: "Player Count",
    accessor: "player_count"
  }]
  return (
    <div className="meetUpWrap">
      <ReactTable data={meetups} columns={columns} />
    </div>
  );
};

export default HostedMeetUps;
