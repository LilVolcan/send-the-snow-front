import React, { Component } from "react";

export default class ModalView extends Component {

  render() {
      console.log(this.props)
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
          <div className="close-btn" onClick={this.props.handleCloseModal}>+</div>
          <h5>{name}</h5>
          <img
            src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3333,w_5000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/B_20200301_CrystalLodgeDusk_ordwd4.jpg"
            alt="resort"
            width="150"
            height="150"
          />
          <p>
            Last 24 Hours: {past_24_hour} in <br></br>
            Base Depth: {base_depth} in <br></br>
            Percentage Open: {area_open}%<br></br>
            Next 1 Day: {next_day_snow} in<br></br>
            Next 5 Days: {next_5_day_snow} in<br></br>
          </p>
        </div>
      </div>
    );
  }
}
