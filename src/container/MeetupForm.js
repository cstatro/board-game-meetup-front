import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userFind } from "../api/postCalls";
import SelectGame from "../components/UI/SelectGame";
import PlayerCount from "../components/UI/PlayerCount";
import TimeEstimate from "../components/UI/TimeEstimate";
const R = require("ramda");

export class MeetupForm extends Component {
  state = { date: null, games: [], selectedGame: null };

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
    const { game_id, date, notes } = this.state;
  };

  render() {
    const { games, selectedGame } = this.state;

    return (
      <div>
        <samp>New Meetup</samp>
        <form onSubmit={console.log}>
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
