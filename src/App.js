import React, { Component } from "react";
import RecContainer from "./containers/RecContainer";
import { Route, Switch } from "react-router-dom";
import Location from "./components/Location";

export default class App extends Component {
  state = {
    selectedState: null
  };

  handleChangeState = event => {
    console.log(event.target.value);
    this.setState({
      selectedState: event.target.value
    });
  };

  handleClick = () => {
    // console.log("selectedState from handleClick: ", this.state.selectedState)
    fetch(`http://localhost:3000/resorts/${this.state.selectedState}`) //RETHINK ALL THIS!
    //   .then(resp => resp.json())
    //   .then(data => console.log(data));
  };
 
  // NOW DO A FETCH REQUEST TO PULL DATA FROM THAT STATE (I.E.: COLORADO!!)
  // FIRST SET UP ROUTES IN THE BACKEND
  // CONDITION CONTROLLER!
  // THEN FETCH
  //  GET REQUEST TO CONDITIONS WITH GIVEN ID
  // THEN USE THAT DATA TO SET STATE // OR PASS DIRECTLY TO REC COMPONENT
  // };

  render() {
    // console.log("selectedState from render: ", this.state.selectedState);
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/top5resorts"
            render={routerProps => (
              <RecContainer {...routerProps} {...this.state.selectedState} />
            )}
          />
          <Route
            exact
            path="/"
            render={routerProps => (
              <Location
                changeState={this.handleChangeState}
                handleClick={this.handleClick}
                {...routerProps}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
