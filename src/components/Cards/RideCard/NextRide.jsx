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

const NextRide = () => {
  return (
    <div className="overlap-wrapper">
      <div className="overlap-2">
        <div className="div-18">
          <p className="text-wrapper-10">
            GLOBAL WARMING: IS IT TOO LATE TO ACT?
          </p>
          <div className="div-19">
            <div className="div-20">
              <img className="img-3" alt="Users" src={users} />
              <div className="text-wrapper-11">2 seats available</div>
            </div>
            <div className="div-20">
              <img className="img-3" alt="Ph hand coins" src={handcoins} />
              <div className="text-wrapper-11">10 EUR</div>
            </div>
          </div>
          <div className="frame-wrapper-6">
            <div className="frame-wrapper-7">
              <div className="div-21">
                <div className="text-wrapper-12">09:00</div>
                <div className="div-22">
                  <img className="img-3" alt="Map pin" src={mappin} />
                  <p className="text-wrapper-11">
                    Schloßstraße 88, 01079 Vienna, Austria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="line-3" alt="Line" src={line3} />
          <div className="frame-wrapper-8">
            <div className="div-21">
              <div className="text-wrapper-12">11:10</div>
              <div className="div-22">
                <img className="img-3" alt="Map pin" src={mappin} />
                <p className="text-wrapper-11">
                  Klingelhöferstraße 23, 10785 Berlin, Germany
                </p>
              </div>
            </div>
          </div>
          <p className="people-s-interests-2">
            People&#39;s interests in the ride
          </p>
          <div className="div-23">
            <div className="div-wrapper-3">
              <div className="text-wrapper-13">solar energy</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-13">ecology</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-13">solar energy</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-13">wildlife protection</div>
            </div>
          </div>
          <div className="div-24">
            <img className="img-3" alt="User plus" src={userplus} />
            <div className="text-wrapper-14">Join ride</div>
          </div>
          <div className="div-25">
            <div className="frame-wrapper-9">
              <div className="div-26">
                <img className="img-4" alt="Ellipse" src={avata_img} />
                <div className="text-wrapper-15">Driver</div>
                <div className="text-wrapper-16">Oliver Bern</div>
              </div>
            </div>
            <div className="frame-wrapper-9">
              <div className="div-26">
                <img className="img-4" alt="Ellipse" src={avata_img} />
                <div className="text-wrapper-15">Passenger</div>
                <div className="text-wrapper-16">Kira Schneider</div>
              </div>
            </div>
            <div className="frame-wrapper-9">
              <div className="div-26">
                <img className="img-4" alt="Frame" src={no_user_there} />
                <div className="text-wrapper-15">Passenger</div>
                <div className="text-wrapper-17">Seat for you</div>
              </div>
            </div>
          </div>
          <div className="div-27">
            <img className="img-3" alt="Message circle" src={messagecircle} />
            <div className="text-wrapper-11">Message a driver</div>
          </div>
          <div className="text-wrapper-18">Event starts at 14:00</div>
        </div>
        <div className="div-28">
          <img className="img-3" alt="Calendar" src={calendar} />
          <div className="text-wrapper-19">22/08/2023</div>
        </div>
      </div>
    </div>
  );
};

export default NextRide;
