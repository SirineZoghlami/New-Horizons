import React from "react";
import "./UpCommingRide.css";
import { arrowupright } from "../../assets";

import Ride from "../Cards/RideCard/Ride";
import NextRide from "../Cards/RideCard/NextRide";
import PreviusRide from "../Cards/RideCard/PreviusRide";

const UpCommingRide = () => {
  return (
    <div className="frame">
      <div className="overlap">
        <h1 className="upcoming-rides">UPCOMING RIDES</h1>
        <div className="overlap-group">
          <div className="group">
            <PreviusRide />
            <Ride />
            <NextRide />
          </div>
        </div>
        <div className="div-29">
          <div className="view-all-rides">VIEW ALL RIDES</div>
          <img className="img" alt="Arrow up right" src={arrowupright} />
        </div>
      </div>
    </div>
  );
};

export default UpCommingRide;
