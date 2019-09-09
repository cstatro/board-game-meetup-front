import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userFind } from "../api/postCalls";
import SelectGame from "../components/UI/SelectGame";
import PlayerCount from "../components/UI/PlayerCount";
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
      this.setState({ selectedGame });
    }
  };

  componentDidMount() {
    const { user } = this.props;
    fetch(userFind(user.id))
      .then(r => r.json())
      .then(user => this.setState({ games: user.games }));
  }

  render() {
    const { games, selectedGame } = this.state;

    return (
      <div>
        <samp>New Meetup</samp>
        <form>
          <label for="exampleFormControlInput1">Select a Date</label>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <SelectGame handleGameChange={this.handleGameChange} games={games} />

          <div className="form-group">
            <label for="exampleFormControlInput1">Estimated Game Length</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="120 minutes"
            />
          </div>

          {selectedGame ? <PlayerCount selectedGame={selectedGame} /> : null}

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Notes</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
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
