import React, { Component } from "react";
// import { Card } from 'semantic-ui-react'

export default class Recommendation extends Component {

  render() {
    // debugger
    // console.log(this.props.attributes.conditions[0].next_day_snow);
    const { name } = this.props.attributes;
    const {
      next_day_snow,
      base_depth,
      past_24_hour,
      area_open,
      next_5_day_snow
    } = this.props.attributes.conditions[0];
    return (
      <div className="style-cards">
        <h1>{name}</h1>
        {/* <p>
          Last 24 Hours: {past_24_hour} in <br></br>
          Base Depth: {base_depth} in <br></br>
          Percentage Open: {area_open}%<br></br>
          Next 1 Day: {next_day_snow} in<br></br>
          Next 5 Days: {next_5_day_snow} in<br></br>
        </p> */}
      </div>
      // <Card fluid color='red' padding='100px'>

      // </Card>
    );
  }
}
