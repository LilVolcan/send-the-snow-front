import React, { Component } from "react";
import Recommendation from "../components/Recommendation";
import ModalView from "../components/ModalView";
import Snowflakes from "../components/Snowflakes";

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
    // console.log(.data.length)
    const {data} = this.props.topFive
    return (
      <>
        <Snowflakes />
        <div className="rec-bg">
          <div>
            { data.length >= 1 ? <div className="one">1</div> : null }
            { data.length >= 2 ? <div className="two">2</div> : null }
            { data.length >= 3 ? <div className="three">3</div> : null }
            { data.length >= 4 ? <div className="four">4</div> : null }
            { data.length >= 5 ? <div className="five">5</div> : null }

            {/* <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div> */}
          </div>
          <div className="card-container">
            <h3 fontWeight="bold">TOP {data.length} RECOMMENDATIONS:</h3>
            {this.renderRecs()}
          </div>
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
