import React, { Component } from "react";

export default class ModalView extends Component {
  render() {
    console.log(this.props);
    const {
      name,
      image_url,
      base_elevation,
      summit_elevation,
      resort_link
    } = this.props.attributes;
    const {
      next_day_snow,
      base_depth,
      past_24_hour,
      area_open,
      next_5_day_snow
    } = this.props.attributes.conditions[0];
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="close-btn" onClick={this.props.handleCloseModal}>
            +
          </div>
          <div>
            <h1 textAlign="left">{name}</h1>
            <br></br>
            <img
              className="resort-image"
              src={image_url}
              alt="resort"
              width="300"
              height="300"
            />
            <br></br>
            <br></br>
            <a href={resort_link}>{name}</a>
          </div>
          <div className="conditions">
            <h3> Conditions </h3><br></br>
            <p> ❄️ Last 24 Hours: {past_24_hour === "" ? 0 : past_24_hour}" </p>
            <p> ❄️ Base Depth: {base_depth === "" ? 0 : base_depth}" </p>
            <p> 🏔 Summit Elevation: {summit_elevation} ft.</p>
            <p> 🏔 Base Elevation: {base_elevation} ft.</p>
            <p> ❄️ Percentage Open: {area_open === "" ? 0 : area_open}% </p>
          </div>
          <div className="forecast">
            <h3> Forecast </h3><br></br>
            <p> ❄️ Next 1 Day: {next_day_snow === "" ? 0 : next_day_snow}" </p>
            <p>
              {" "}
              ❄️ Next 5 Days: {next_5_day_snow === "" ? 0 : next_5_day_snow}"
            </p>
          </div>
        </div>
      </div>
    );
  }
}
