import React, { Component } from "react";

export default class ModalView extends Component {
  render() {
    const { name } = this.props.attributes;
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
            <img
            className="resort-image"
              src="https://images.vailresorts.com/image/upload/c_scale,dpr_3.0,f_auto,q_auto,w_500/v1/Vail/Products/Brochure/The%20Mountain/About%20the%20Mountain/Mountain%20Info/Vail%20Mountain%20Info%20Winter.jpg"
              alt="resort"
              width="300"
              height="300"
            />
          </div>
          <div className="conditions">
            <h3> Conditions </h3>
            <p> ❄️ Last 24 Hours: {past_24_hour === "" ? 0 : past_24_hour}" </p>
            <p> ❄️ Base Depth: {base_depth === "" ? 0 : base_depth}" </p>
            <p> ❄️ Percentage Open: {area_open === "" ? 0 : area_open}% </p><br></br>
            <h3> Forecast </h3>
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
