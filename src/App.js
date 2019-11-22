import React, { Component } from "react";
import RecContainer from "./containers/RecContainer";
import Location from "./components/Location";
import "./App.css"

export default class App extends Component {
  state = {
    selectedState: null,
    topFive: null
  };

  handleChangeState = event => {
    this.setState({
      selectedState: event.target.value
    });
  };

  handleClick = () => {
    fetch(`http://localhost:3000/resorts/${this.state.selectedState}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          topFive: data
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.topFive === null ? (
          <Location
            changeState={this.handleChangeState}
            handleClick={this.handleClick}
          />
        ) : (
          <RecContainer topFive={this.state.topFive} />
        )}
      </div>
    );
  }
}
