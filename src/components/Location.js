import React, { Component } from "react";
// import { Image } from 'semantic-ui-react'

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
    // console.log(this.props)
    return (
      <div className="background">
        <div className="intro-container">
          <h1>WHERE IS THE FRESHEST POW?!</h1>
          <select onChange={this.props.changeState}>
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
