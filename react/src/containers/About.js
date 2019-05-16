import React, { Component } from "react";
import Member from "../components/AboutComponents/Member";

export default class About extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>AboutUs</h1>
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
        <Member
          img="images/TomCat.jpg"
          name="Dr. Kat Lady, D.V.M., DACVS"
          description="Kat has been a vet for over 20 years. She graduated from the University of Illinois. In her spare time she also enjoys swimming and kickboxing to stay active and strong. Her cat's name is Crazy Eyes."
        />
        <Member
          img="images/TopDog.jpg"
          name="Dr. Goldie Retrieve, D.V.M., DACVS"
          description="Goldie is board certified veterinary surgeon with 10 years of veterinary surgery experience. She graduated from the University of Wisconsin-Madison School of Veterinary Medicine. She is Rescue Scuba certified and also has a special talent of underwater pumpkin carving! Her dog's name is Sugar Doggie."
        />
      </div>
    );
  }
}
