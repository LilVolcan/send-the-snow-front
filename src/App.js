import React, { Component } from "react";
import RecContainer from "./containers/RecContainer";
import { Route, Switch } from "react-router-dom";
import Location from "./components/Location";


export default class App extends Component {
  state = {
    // states: [],
    selectedStateID: null
  };

  
  handleChangeState = (event) => {
    // console.log(event.target.value)
    this.setState({
      selectedStateID: event.target.value
    })
    // NOW DO A FETCH REQUEST TO PULL DATA FROM THAT STATE (I.E.: COLORADO!!)
    // FIRST SET UP ROUTES IN THE BACKEND 
      // CONDITION CONTROLLER!
    // THEN FETCH
        //  GET REQUEST TO CONDITIONS WITH GIVEN ID
    // THEN USE THAT DATA TO SET STATE // OR PASS DIRECTLY TO REC COMPONENT
  }
  

  render() {
    // console.log(this.state.states)
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/home"
            render={routerProps => <Location changeState={this.handleChangeState} {...routerProps} />}
          />
          <Route
            exact
            path="/recommendations"
            render={routerProps => <RecContainer {...routerProps} />}
          />
        </Switch>
      </div>
    );
  }
}
