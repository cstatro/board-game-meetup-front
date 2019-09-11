import React from "react";
import ReactTable from "react-table";
import { hostedGameColumns } from "../Table-Helpers/hosted-meet-ups";
const HostedMeetUps = props => {
  console.log(hostedGameColumns());
  const { meetups } = props;
  return (
    <div className="meetUpWrap">
      <ReactTable data={meetups} columns={hostedGameColumns()} />
    </div>
  );
};

export default HostedMeetUps;
