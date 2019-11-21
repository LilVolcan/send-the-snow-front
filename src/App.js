import React, { Component } from "react";
import RecContainer from "./containers/RecContainer";
// import { Route, Switch } from "react-router-dom";
import Location from "./components/Location";
import "./App.css"

export default class App extends Component {
  state = {
    selectedState: null,
    topFive: null
  };

  handleChangeState = event => {
    // console.log(event.target.value);
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
    // this.props.history.push('/top5resorts')
  };

  // NOW DO A FETCH REQUEST TO PULL DATA FROM THAT STATE (I.E.: COLORADO!!)
  // FIRST SET UP ROUTES IN THE BACKEND
  // CONDITION CONTROLLER!
  // THEN FETCH
  //  GET REQUEST TO CONDITIONS WITH GIVEN ID
  // THEN USE THAT DATA TO SET STATE // OR PASS DIRECTLY TO REC COMPONENT
  // };

  render() {
    // console.log(this.state.topFive)
    // console.log("selectedState from render: ", this.state.selectedState);
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
