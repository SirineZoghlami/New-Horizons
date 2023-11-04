import React from "react";

import {
  users,
  mappin,
  userplus,
  handcoins,
  messagecircle,
  calendar,
  avata_img,
  no_user_there,
  line3,
} from "../../../assets";
import { GetHM } from "../../../functions/times";
import { MakeArray } from "../../../functions/arrays";

const default_ride = {
  id_ride: 0,
  departLocation: "Montreal",
  arrivalLocation: "Toronto",
  price: 20,
  seatsAvailable: 2,
  arrivalTime: "12:00",
  commentRide: "I am a comment",
  departureDate: "2021-03-20",
  pickingTime: "10:00",
};

const Ride = ({ ride = default_ride }) => {
  return (
    <div className="overlap-group-wrapper">
      <div className="overlap-group-3">
        <div className="div-10">
          <p className="ecology-forum-for">
            {ride.departureDate} - From {ride.departLocation} To{" "}
            {ride.arrivalLocation}{" "}
          </p>
          <div className="div-11">
            <div className="div-12">
              <img className="img" alt="Users" src={users} />
              <div className="text-wrapper">
                {ride.seatsAvailable} seat available
              </div>
            </div>
            <div className="div-12">
              <img className="img" alt="Ph hand coins" src={handcoins} />
              <div className="text-wrapper">{ride.price} EUR</div>
            </div>
          </div>
          <div className="frame-wrapper-4">
            <div className="frame-wrapper-5">
              <div className="div-4">
                <div className="text-wrapper-2">{GetHM(ride.pickingTime)}</div>
                <div className="div-5">
                  <img className="img" alt="Map pin" src={mappin} />
                  <p className="text-wrapper">{ride.departLocation}</p>
                </div>
              </div>
            </div>
          </div>
          <img className="line-2" alt="Line" src={line3} />
          <div className="frame-wrapper-2">
            <div className="div-4">
              <div className="text-wrapper-2">{GetHM(ride.arrivalTime)}</div>
              <div className="div-5">
                <img className="img" alt="Map pin" src={mappin} />
                <p className="text-wrapper">{ride.arrivalLocation}</p>
              </div>
            </div>
          </div>
          {/* <p className="p">Event starts on 23/08/2023 at 14:00</p> */}
          <div className="text-wrapper-8">See 3 more</div>
          <p className="people-s-interests">
            People&#39;s interests in the ride
          </p>
          <div className="div-13">
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">solar energy</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">ecology</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">solar energy</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">wildlife protection</div>
            </div>
          </div>
          <div className="div-14">
            <img className="img" alt="User plus" src={userplus} />
            <div className="text-wrapper-5">Join ride</div>
          </div>
          <div className="div-15">
            {/* <div className="frame-wrapper-3">
              <div className="div-9">
                <img className="img-2" alt="Ellipse" src={avata_img} />
                <div className="text-wrapper-6">Driver</div>
                <div className="text-wrapper-7">Oliver Bern</div>
              </div>
            </div> */}

            {MakeArray(ride.seatsAvailable).map((seat, index) => {
              return (
                <div className="frame-wrapper-3">
                  <div className="div-9">
                    <img className="img-2" alt="Ellipse" src={no_user_there} />
                    <div className="text-wrapper-6">Passenger</div>
                    <div className="text-wrapper-9">Oliver Bern</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="div-16">
            <img className="img" alt="Message circle" src={messagecircle} />
            <div className="text-wrapper">Message a driver</div>
          </div>
        </div>
        <div className="div-17">
          <img className="img" alt="Calendar" src={calendar} />
          <div className="text-wrapper">22/08/2023</div>
        </div>
      </div>
    </div>
  );
};
export default Ride;
