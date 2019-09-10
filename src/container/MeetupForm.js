import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userFind, MEETUPS } from "../api/postCalls";
import SelectGame from "../components/UI/SelectGame";
import PlayerCount from "../components/UI/PlayerCount";
import TimeEstimate from "../components/UI/TimeEstimate";
import { addMinutes, format } from "date-fns/esm";
import { postConfig } from "../api/config";
const R = require("ramda");

export class MeetupForm extends Component {
  state = { date: null, games: [], selectedGame: null, notes: "" };

  handleDateChange = date => {
    this.setState({ date });
  };
  handleGameChange = id => {
    if (id) {
      const { games } = this.state;
      const selectedGame = games.find(g => g.id === parseInt(id));
      this.setState({ selectedGame, game_id: selectedGame.id });
    }
  };

  componentDidMount() {
    const { user } = this.props;
    fetch(userFind(user.id))
      .then(r => r.json())
      .then(user => this.setState({ games: user.games }));
  }

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { game_id, date, notes, selectedGame } = this.state;
    const start_time = format(date, "MMMM d, yyyy h:mm aa");
    const num = selectedGame.min_playtime;
    const end_time = format(addMinutes(date, num), "MMMM d, yyyy h:mm aa");
    const gameObj = { game_id, notes, start_time, end_time };
    const config = postConfig(gameObj);
    fetch(MEETUPS, config)
      .then(r => r.json())
      .then(d => console.log(d));
  };

  render() {
    const { games, selectedGame } = this.state;

    return (
      <div>
        <samp>New Meetup</samp>
        <form onSubmit={this.handleSubmit}>
          <label for="exampleFormControlInput1">Select a Date</label>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <SelectGame handleGameChange={this.handleGameChange} games={games} />

          <TimeEstimate selectedGame={selectedGame} />

          {selectedGame ? <PlayerCount selectedGame={selectedGame} /> : null}

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Notes</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="notes"
              rows="3"
              onChange={e => this.handleFormChange(e)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mb-2">
            Create New Meetup
          </button>
        </form>
      </div>
    );
  }
}

export default MeetupForm;
