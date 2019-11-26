import React, { Component } from "react";

export default class Recommendation extends Component {
  snowfall = inches => {
    if (inches === "") {
      return 0;
    } else {
      return inches;
    }
  };

  render() {
    const { name, id } = this.props.attributes;
    const {
      // next_day_snow,
      // base_depth,
      past_24_hour,
      // area_open,
      next_5_day_snow
    } = this.props.attributes.conditions[0];

    return (
      <div className="style-cards">
        <h1>
          {name}{" "}
          {this.props.filter === "past_24_hour"
            ? this.snowfall(past_24_hour)
            : this.snowfall(next_5_day_snow)}
          "
        </h1>

        <button
          style={{ borderRadius: "4px" }}
          onClick={() => this.props.handleModalView(id)}
        >
          Details
        </button>
      </div>
    );
  }
}
