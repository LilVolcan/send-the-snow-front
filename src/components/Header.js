import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Header extends Component {

  render() {
    return (
      <>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand className="pointer" onClick={(e) => this.props.navigateHome(e)}>
            <img
              alt="snowflake"
              src="http://pngimg.com/uploads/snowflakes/snowflakes_PNG7582.png"
              width="30"
              height="30"
              className="d-inline-block align-top" 
             />{" "}
            powder{" "}
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}
