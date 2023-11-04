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

const Ride = () => {
  return (
    <div className="overlap-group-wrapper">
      <div className="overlap-group-3">
        <div className="div-10">
          <p className="ecology-forum-for">ECOLOGY FORUM FOR CLIMATE CHANGE</p>
          <div className="div-11">
            <div className="div-12">
              <img className="img" alt="Users" src={users} />
              <div className="text-wrapper">1 seat available</div>
            </div>
            <div className="div-12">
              <img className="img" alt="Ph hand coins" src={handcoins} />
              <div className="text-wrapper">15 EUR</div>
            </div>
          </div>
          <div className="frame-wrapper-4">
            <div className="frame-wrapper-5">
              <div className="div-4">
                <div className="text-wrapper-2">09:00</div>
                <div className="div-5">
                  <img className="img" alt="Map pin" src={mappin} />
                  <p className="text-wrapper">
                    Schloßstraße 2, 01067 Dresden, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="line-2" alt="Line" src={line3} />
          <div className="frame-wrapper-2">
            <div className="div-4">
              <div className="text-wrapper-2">11:10</div>
              <div className="div-5">
                <img className="img" alt="Map pin" src={mappin} />
                <p className="text-wrapper">
                  Klingelhöferstraße 23, 10785 Berlin, Germany
                </p>
              </div>
            </div>
          </div>
          <p className="p">Event starts on 23/08/2023 at 14:00</p>
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
            <div className="frame-wrapper-3">
              <div className="div-9">
                <img className="img-2" alt="Ellipse" src={avata_img} />
                <div className="text-wrapper-6">Driver</div>
                <div className="text-wrapper-7">Oliver Bern</div>
              </div>
            </div>
            <div className="frame-wrapper-3">
              <div className="div-9">
                <img className="img-2" alt="Ellipse" src={avata_img} />
                <div className="text-wrapper-6">Passenger</div>
                <div className="text-wrapper-7">Kira Schneider</div>
              </div>
            </div>
            <div className="frame-wrapper-3">
              <div className="div-9">
                <img className="img-2" alt="Ellipse" src={avata_img} />
                <div className="text-wrapper-6">Passenger</div>
                <div className="text-wrapper-7">Ben Petterson</div>
              </div>
            </div>
            <div className="frame-wrapper-3">
              <div className="div-9">
                <img className="img-2" alt="Frame" src={no_user_there} />
                <div className="text-wrapper-6">Passenger</div>
                <div className="text-wrapper-9">Seat for you</div>
              </div>
            </div>
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
