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
        console.log("Data fetched:", response.data);
        setRideData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const fake_data = [
    {
      id_ride: 1,
      departLocation: "Montreal 50",
      arrivalLocation: "Toronto 50",
      price: 50,
      seatsAvailable: 6,
      arrivalTime: "15:00",
      commentRide: "I am a comment",
      departureDate: "2021-03-20",
      pickingTime: "12:00",
    },
    {
      id_ride: 2,
      departLocation: "Montreal",
      arrivalLocation: "Toronto",
      price: 20,
      seatsAvailable: 2,
      arrivalTime: "12:00",
      commentRide: "I am a comment",
      departureDate: "2021-03-20",
      pickingTime: "10:00",
    },
    {
      id_ride: 3,
      departLocation: "Montreal",
      arrivalLocation: "Toronto",
      price: 20,
      seatsAvailable: 4,
      arrivalTime: "12:00",
      commentRide: "I am a comment",
      departureDate: "2021-03-20",
      pickingTime: "10:00",
    },
    {
      id_ride: 4,
      departLocation: "Montreal",
      arrivalLocation: "Toronto",
      price: 20,
      seatsAvailable: 2,
      arrivalTime: "12:00",
      commentRide: "I am a comment",
      departureDate: "2021-03-20",
      pickingTime: "10:00",
    },
    {
      id_ride: 5,
      departLocation: "Montreal",
      arrivalLocation: "Toronto",
      price: 20,
      seatsAvailable: 5,
      arrivalTime: "12:00",
      commentRide: "I am a comment",
      departureDate: "2021-03-20",
      pickingTime: "10:00",
    },
    {
      id_ride: 6,
      departLocation: "Montreal",
      arrivalLocation: "Toronto",
      price: 20,
      seatsAvailable: 2,
      arrivalTime: "12:00",
      commentRide: "I am a comment",
      departureDate: "2021-03-20",
      pickingTime: "10:00",
    },
  ];

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
          {fake_data.map((ride, index) => (
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
