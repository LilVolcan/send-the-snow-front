import React, { Component } from "react";
import Recommendation from "../components/Recommendation";
import ModalView from "../components/ModalView";
import SnowFallingDown from "../SnowFallingDown.mp4";

export default class RecContainer extends Component {
  state = {
    selectedResort: null,
    modal: false
  };

  handleModalView = id => {
    this.setState({
      selectedResort: id,
      modal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedResort: null,
      modal: false
    });
  };

  renderRecs = () => {
    let resorts = this.props.topFive.data;
    return resorts.map((resort, i) => {
      return (
        <Recommendation
          key={i}
          {...resort}
          handleModalView={this.handleModalView}
          filter={this.props.filterBy}
        />
      );
    });
  };

  renderModal = id => {
    let resorts = this.props.topFive.data;
    let resort = resorts.find(resort => resort.attributes.id === id);
    return <ModalView {...resort} handleCloseModal={this.handleCloseModal} />;
  };

  render() {
    console.log(this.props)
    return (
      <>
        <div className="rec-bg">
          <div>
            <video
              src={SnowFallingDown}
              type="video/mp4"
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
          </div>

          <div className="card-container">
            <h3 fontWeight="bold">TOP FIVE RECOMMENDATIONS BASED ON { this.props.filterBy === "past_24_hour" ? "PAST 24 HOUR SNOWFALL" : "5 DAY FORECASTED SNOWFALL"}:</h3>
            {this.renderRecs()}
          </div>
          <div className="map-container"></div>
        </div>

        <div>
          {this.state.modal
            ? this.renderModal(this.state.selectedResort)
            : null}
        </div>
      </>
    );
  }
}
