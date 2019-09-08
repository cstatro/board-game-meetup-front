import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userFind } from "../api/postCalls";
import SelectGame from "../components/UI/SelectGame";

export class MeetupForm extends Component {
  state = { date: null, games: [], selectedGame: null };

  handleDateChange = date => {
    this.setState({ date });
  };
  componentDidMount() {
    const { user } = this.props;
    fetch(userFind(user.id))
      .then(r => r.json())
      .then(user => this.setState({ games: user.games }));
  }

  render() {
    const { games } = this.state;
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

          <SelectGame games={games} />

          <div className="form-group">
            <label for="exampleFormControlInput1">Estimated Game Length</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="120 minutes"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Players Count</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>

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
