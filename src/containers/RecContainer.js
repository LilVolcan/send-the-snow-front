import React, { Component } from "react";
import Recommendation from "../components/Recommendation";
// import { Card } from "semantic-ui-react";

export default class RecContainer extends Component {
  renderRecs = () => {
    let resorts = this.props.topFive.data;
    return resorts.map((resort, i) => {
      return <Recommendation key={i} {...resort} />;
    });
  };

  render() {
    // console.log(this.props.topFive.data);
    return (
      <div>
        TOP FIVE RECOMMENDATIONS:
        {/* <Card.Group> */}
          {this.renderRecs()}
        {/* </Card.Group> */}
      </div>
    );
  }
}
