import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Rides.css";
import Ride from "../../components/Cards/RideCard/Ride";
import "../../components/Body/Body.css";
import { useSelector } from "react-redux";

export const Rides = ({ ...props }) => {
  const [rideData, setRideData] = useState([]);
  const user = useSelector((state) => state.UserReducer.user);

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("http://localhost:3309/api/rides/all")
      .then((response) => {
        setRideData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {user && user.driver && (
          <div className="rides-cont">
            <div className="create-ride-btn">Create Ride</div>
          </div>
        )}

        <div className="ride-container-wrapper">
          {rideData.map((ride, index) => (
            <div className="frame card-raide" key={index}>
              <Ride ride={ride} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rides;
