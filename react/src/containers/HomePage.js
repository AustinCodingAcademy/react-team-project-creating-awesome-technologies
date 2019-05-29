import React, { Component } from "react";

export default class HomePage extends Component {

  render() {
    return (
      <div>
      <div className="row col-md-12">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">Events</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Muffins for your Pets</a>
              </h3>
              <div className="mb-1 text-muted">May 29th</div>
              <p className="card-text mb-auto"> Stop by PAWS Veterinary Services for a special treat for your pet. Enjoy our gluten free, vegan, pet-safe muffins for your sweet baby that you call "Muffin"!</p>
              <a href="#">Continue reading</a>
            </div>
            <img className="card-img-left flex-auto d-none d-md-block" img src="https://i.pinimg.com/originals/ad/5c/12/ad5c12c4e3191be8a068746ff2d66675.jpg" alt="Card image cap" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">News</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Pet of the Week</a>
              </h3>
              <div className="mb-1 text-muted">May 27th</div>
              <p className="card-text mb-auto">Who's a good girl?? Oh yes you are, <b>Nellie</b>, oh yes you are!</p>
              <a href="#">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" img src="https://www.myfamilyusa.com/content/images/thumbs/0027614_black-french-bulldog-id-dog-tag.jpeg" alt="Card image cap" />
          </div>
        </div>
        </div>
        </div>

    );
  }
}
