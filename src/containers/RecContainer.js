import React, { Component } from "react";
import Recommendation from "../components/Recommendation";
import ModalView from "../components/ModalView";
import iconThree from "../assets/iconThree.png";
// import SnowFallingDown from "../assets/SnowFallingDown.mp4";
// import alpineImage from "../assets/alpineImage.jpg";

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
    console.log(this.props);
    return (
      <>
        <div className="rec-bg">
          <div>
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div>
            {/* <img className="five" src="" alt="5" /> */}
          </div>

          <div className="card-container">
            <h3 fontWeight="bold">
              TOP FIVE RECOMMENDATIONS{" "}
              {/* {this.props.filterBy === "past_24_hour"
                ? "PAST 24 HOUR SNOWFALL"
                : "5 DAY FORECASTED SNOWFALL"} */}
              :
            </h3>
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
