import React, { Component } from 'react'
import DatePicker from "../components/DatePicker"


export class Meetup extends Component {

    render() {
        return (
            <div>
                <samp>New Meetup</samp>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Host</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <label for="exampleFormControlInput1">Select a Date</label>
                    <DatePicker selected={this.props.date} onChange={this.props.handleChange} onSelect={this.props.handleSelect} />

                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Select Board Game</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Estimated Game Length</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="120 minutes" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Players Count</label>
                        <select class="form-control" id="exampleFormControlSelect1">
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

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Add Members</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Notes</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary mb-2">Create New Meetup</button>
                </form>
            </div>
        )
    }
}

export default Meetup
