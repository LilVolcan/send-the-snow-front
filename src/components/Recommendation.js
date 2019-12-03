import React, { Component } from "react";

export default class Recommendation extends Component {
  render() {
    const { name, id, icon } = this.props.attributes;

    return (
      <div className="cards">
        <div className="style-cards">
          <button
            className="details-btn"
            onClick={() => this.props.handleModalView(id)}
          >
            Details
          </button>
          <img className="icon" src={icon} alt="icon" />
          <h1 className="text">{name}</h1>
        </div>
      </div>
    );
  }
}
