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

function App({ amenities }) {
  return (
    <ul>
      {amenities.map(amenity => (
        <li>{amenity}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(
  <App amenities={amenitiesList} />,
  document.getElementById("root")
);

export default App;
