import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Rides.css";
import Ride from "../Cards/RideCard/Ride";
import "../Body/Body.css";

export const Rides = ({ ...props }) => {
  const [rideData, setRideData] = useState([]);

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
      seatsAvailable: 2,
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
      seatsAvailable: 2,
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
        <div className="ride-container-wrapper">
          {fake_data.map((ride, index) => (
            <div className="frame card-raide" key={index}>
              <Ride
                id_ride={ride.id_ride}
                departLocation={ride.departLocation}
                arrivalLocation={ride.arrivalLocation}
                price={ride.price}
                seatsAvailable={ride.seatsAvailable}
                arrivalTime={ride.arrivalTime}
                commentRide={ride.commentRide}
                departureDate={ride.departureDate}
                pickingTime={ride.pickingTime}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rides;
