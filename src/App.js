import React, { Component } from "react";
import RecContainer from "./containers/RecContainer";
import Location from "./components/Location";
import "./App.css";

export default class App extends Component {
  state = {
    selectedState: null,
    filterBy: null, // CONSIDER ADDING MORE FILTERS (I.E., ACREAGE OPEN???)
    topFive: null
  };

  handleChangeState = event => {
    this.setState({
      selectedState: event.target.value
    });
  };

  handleChangeFilter = event => {
    this.setState({
      filterBy: event.target.value
    });
  };

  handleClick = () => {
    if (this.state.selectedState === null) {
      alert("Please Select A State");
    } else {
      fetch(
        `http://localhost:3000/resorts/${this.state.selectedState}/${this.state.filterBy}`
      )
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            topFive: data
          });
        });
    }
  };

  render() {
    return (
      <div>
        {this.state.topFive === null ? (
          <Location
            changeState={this.handleChangeState}
            changeFilter={this.handleChangeFilter}
            handleClick={this.handleClick}
          />
        ) : (
          <RecContainer {...this.state} />
        )}
      </div>
    );
  }
}
