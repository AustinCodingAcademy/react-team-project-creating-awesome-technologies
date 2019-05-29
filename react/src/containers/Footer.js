import React, { Component } from "react";
import { Jumbotron, Row } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <footer className="myFooter container">
          <Row>
            <div class="col-md-4">
              <h4 className="addressphonetitle">Address / Phone</h4>
              <p className="street">777 Hummingbird Street</p>
              <p className="citystatezip">Leander, TX 78641</p>
              <p className="phone">512-123-4567</p>
            </div>

            <div class="col-md-4">
              <img src="images/facebook.png" height="42" width="42" hspace="20"/>
              <img src="images/instagram.png" height="42" width="42" hspace="20"/>
              <img src="images/twitter.png" height="42" width="42" hspace="20"/>
            </div>

            <div class="col-md-4">
              <h4 className="hourstitle">Hours</h4>
              <p className="weekdays">Monday - Friday 8:00am - 6:00pm</p>
              <p className="saturdays">Saturday 8:00am - 3:00pm</p>
            </div>
          </Row>
          <hr />
          <Row>
            <div class="col-md-4">
            </div>

            <div class="col-md-4">
              <p>Copyright PAWS Veterinary Services</p>
            </div>
          </Row>
        </footer>
      </div>
    );
  }
}
