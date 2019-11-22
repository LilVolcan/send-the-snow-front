import React, { Component } from "react";

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
        <div className="selection-container">
          <h1>SEND ME TO THAT FRESH POW?!</h1>
          <select className="select-css"onChange={this.props.changeState}>
            <option>Select A State</option>
            {this.state.states.map(state => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
          <button className="select-state-btn" onClick={this.props.handleClick}>
            Let's Go!
          </button>
        </div>
      </div>
    );
  }
}
