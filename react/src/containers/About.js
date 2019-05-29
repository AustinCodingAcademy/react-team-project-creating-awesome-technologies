import React, { Component } from "react";
import Member from "../components/AboutComponents/Member";

export default class About extends Component {
  state = {};

  render() {
    return (
      <div>
        
        <h1>About Us</h1>
        <h4 class="-h1 -light -spacing-24">
          The PAWS Veterinary Services Team
        </h4>
        <p class="-large">
          PAWS Veterinary Services team is committed to treat pets with kindness
          and compassion.
        </p>

        <h4 class="-h4 -ta-center -spacing-1">Meet our Veterinarians</h4>

        
        <p class="-large -ta-center">
          The team comes from many of the leading veterinary schools.
          Get to know them.
        </p>

        <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="images/TomCat.jpg" alt="Card image cap" width="300px" height="360px"/>
                <div class="card-body">
                  <h3>Dr. Kat Lady, D.V.M., DACVS</h3>
                  <p class="card-text">Kat has been a vet for over 20 years. She graduated from the University of Illinois. In her spare time she also enjoys swimming and kickboxing to stay active and strong. Her cat's name is Crazy Eyes.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    {/* <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div> */}
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="images/TopDog.jpg" alt="Card image cap" width="300px" height="350px" />
                <div class="card-body">
                  <h3>Dr. Goldie Retrieve, D.V.M., DACVS</h3>
                  <p class="card-text">Goldie is board certified veterinary surgeon with 10 years of veterinary surgery experience. She graduated from the University of Wisconsin-Madison School of Veterinary Medicine. She is Rescue Scuba certified and also has a special talent of underwater pumpkin carving! Her dog's name is Sugar Doggie.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    {/* <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div> */}
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>
            </div>

      
          </div>

          
         
      );
  }
}
