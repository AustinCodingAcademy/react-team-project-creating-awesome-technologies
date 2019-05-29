import React, { Component } from "react";

export default class HomePage extends Component {

  render() {
    return (
    <div className="row col-md-12">
        <div className="col-md-6">
        <img className="card-img-right flex-auto d-none d-md-block" src="/img/doctoberfest.jpg" alt="Card image cap" height="200px" />
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">Announcements</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Dogtoberfest 2019</a>
              </h3>
              <div className="mb-1 text-muted">September 15, 2019 12:00am - 4:00pm</div>
              <p className="card-text mb-auto">humans and their dog friends are invited to an evening of food, music, and fun.</p>
              <a href="https://www.google.com/maps/place/7734+Terrace+Ave,+Middleton,+WI+53562/@43.0948872,-89.5188319,17z/data=!3m1!4b1!4m5!3m4!1s0x8807af2b606f5829:0xd1fd76a13b5d4def!8m2!3d43.0948872!4d-89.5166432">Map: 7734 Terrace Ave Middleton, WI 53562</a>
            </div>
          </div>
        </div>

        
        <div className="col-md-6">
        <img className="card-img-right flex-auto d-none d-md-block" src="img/dog-facts.jpg" alt="Card image cap" height="200px" />
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">Fun Pet Facts</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Dogs Do Dream</a>
              </h3>
              <div className="mb-1 text-muted">Source: Petfinder</div>
              <p className="card-text mb-auto">Dogs and humans have the same type of slow wave sleep (SWS) and rapid eye movement (REM) and during this REM stage dogs can dream. The twitching and paw movements that occur during their sleep are signs that your pet is dreaming.</p>
              <a href="https://www.petfinder.com/dogs/bringing-a-dog-home/facts-about-new-dog/">Continue reading</a>
            </div>
            
          </div>
          </div>

          </div>

    );
  }
}
