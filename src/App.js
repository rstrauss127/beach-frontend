import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const amenitiesList = [
  "Heated Pool",
  "Full Sized Washer & Dryer",
  "Free Wifi",
  "Cable TV & DVD Player",
  "Covered & Assigned Parking",
  "Elevator"
];

function WelcomeHeader() {
  return (
    <div>
      <h1>Visit Madeira Beach!</h1>
    </div>
  );
}

function WelcomeParagraph() {
  return (
    <div>
      <p>
        Welcome! You can't get any closer to the beach than this! Our three
        renovated condos have been designed with your comfort in mind. We are
        located in Villa Madeira, across the street from the Candy Kitchen, and
        just a short walk to world famous Johns Pass. Our units are all directly
        on the Gulf with outstanding views of the beach. We provide many
        amenities that other condo rentals do not, such as top quality linens,
        including plush bath towels, large beach towels, toys for your children,
        fully equipped kitchens, and lounges and chairs for the beach.
      </p>
    </div>
  );
}

function App({ amenities }) {
  return (
    <>
      <WelcomeHeader />
      <WelcomeParagraph />
      <ul>
        {amenities.map(amenity => (
          <li>{amenity}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(
  <App amenities={amenitiesList} />,
  document.getElementById("root")
);
