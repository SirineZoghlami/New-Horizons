import React, { useEffect } from "react";
import "./index.css";
import Home from "./Pages/Home";
import {
  OfferRide,
  Event,
  Navbar,
  Info,
  Header,
  Footer,
  Body,
  OfferRideStep1,
  OfferRideStep2,
  OfferRideStep3,
  SelectMap,
  MapModel,
  EventDetails,
  Profile,
  RideDetails,
  Events,
  ReturnRideStep2,
  ReturnRideStep3,
  RideSubmitted,
  ReturnRideSubmitted,
} from "./components";

import {
  AboutUs,
  Failedpage,
  Login,
  Signup,
  SuccessPage,
  Rides,
} from "./Pages";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetUserByToken } from "./redux/User.reducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserByToken());
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/events" element={<Events />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/failed" element={<Failedpage />} />
      <Route path="/offer-ride-step1" element={<OfferRide />} />
      <Route path="/offer-ride-step2" element={<OfferRide />} />
      <Route path="/offer-ride-step3" element={<OfferRide />} />
      <Route path="/select-on-map" element={<SelectMap />} />
      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ride-details" element={<RideDetails />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/return-ride-step2" element={<ReturnRideStep2 />} />
      <Route path="/return-ride-step3" element={<ReturnRideStep3 />} />
      <Route path="/ride-submitted" element={<RideSubmitted />} />
      <Route path="/ride-submitted" element={<RideSubmitted />} />
      <Route path="/return-ride-submitted" element={<ReturnRideSubmitted />} />
      <Route path="/rides" element={<Rides />} />
    </Routes>
  );
};

export default App;
