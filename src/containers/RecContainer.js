import React, { Component } from "react";
import Recommendation from "../components/Recommendation";
import ModalView from "../components/ModalView";
import { conditionalExpression } from "@babel/types";

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
    console.log("hello from the other siiiiiiiiiiide");
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
    return (
      <>
        <div className="rec-bg">
          <div className="card-container">
            TOP FIVE RECOMMENDATIONS:
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
