import React, { Component } from "react";
import mountain from "../assets/mountain.mp4";
// import Header from "./Header"

export default class Location extends Component {
  state = {
    states: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/states")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          states: data
        });
      });
  }

  render() {
    return (
      <div className="intro-page">
        <div>
          <video
            src={mountain}
            type="video/mp4"
            autoPlay="true"
            muted={true}
            loop={true}
          ></video>
        </div>
        <div className="selection-container">
          <h1>SHOW ME THE POWDER!</h1>
          <div className="filters">
            <select className="select-css" onChange={this.props.changeState}>
              <option>Select A State</option>
              {/* <option key="All" value="All">All</option> */} //ADD ALL
              STATES AND FILTER IN BACKEND!
              {this.state.states.map(state => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>

            <select className="select-css" onChange={this.props.changeFilter}>
              {" "}
              <option>Filter By:</option>
              <option key="24-hour" value="past_24_hour">
                Past 24 Hour Snowfall
              </option>
              <option key="5-day" value="next_5_day_snow">
                Next 5 Day Snow Forecast
              </option>
            </select>

            <button
              className="select-state-btn"
              onClick={this.props.handleClick}
            >
              Let's Go!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
