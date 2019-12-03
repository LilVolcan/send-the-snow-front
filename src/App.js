import React, { Component } from "react";
import RecContainer from "./containers/RecContainer";
import Location from "./components/Location";
import "./App.css";
import Header from "./components/Header";
import MapContainer from "./containers/MapContainer";
import { withScriptjs, withGoogleMap } from "react-google-maps";

const WrappedMap = withScriptjs(withGoogleMap(MapContainer));

export default class App extends Component {
  state = {
    selectedState: null,
    filterBy: null, // CONSIDER ADDING MORE FILTERS (I.E., ACREAGE OPEN???)
    topFive: null,
    // selectedResort: null
  };

  navigateHome = e => {
    // this.setState({
    //   selectedState: null,
    //   filterBy: null, // CONSIDER ADDING MORE FILTERS (I.E., ACREAGE OPEN???)
    //   topFive: null
    // });
    window.location.reload();
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

  // selectResort = (resort) => {
  //   this.setState({
  //     selectedResort: resort
  //   })
  // }

  render() {
    return (
      <div>
        <Header navigateHome={this.navigateHome} />
        {this.state.topFive === null ? (
          <Location
            changeState={this.handleChangeState}
            changeFilter={this.handleChangeFilter}
            handleClick={this.handleClick}
          />
        ) : (
          <>
            <RecContainer {...this.state} />
            <div className="map-container">
              <WrappedMap
                googleMapURL={
                  "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDFtDeSpeuq9Vwi4vXPEihF8K_ES5KJsc8"
                }
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                {...this.state.topFive}
                // selectResort={this.selectResort}
                // selectedResort={this.state.selectedResort}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}
