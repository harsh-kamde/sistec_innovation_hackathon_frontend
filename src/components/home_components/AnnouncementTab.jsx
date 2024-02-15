import React from "react";

const AnnouncementTab = () => {
  return (
    <>
      <section className="announcements">
        <div className="paddings innerWidth flexCenter announce-container">
          <div className="announceCard">
            <img
              src="./images/announcement_tab_images/registration_fees.png"
              alt=""
            />
            <h3>Registration </h3>
            <span>₹ 1000/- per Team</span>
            {/* <span>Starting soon</span> */}
          </div>
          <div className="announceCard">
            <img
              src="./images/announcement_tab_images/grand_finale.png"
              alt=""
            />
            <h3>Grand Finale</h3>
            <span>10 April 2024</span>
            {/* <span>It's coming</span> */}
          </div>
          <div className="announceCard">
            <img src="./images/announcement_tab_images/venue.png" alt="" />
            <h3>Venue</h3>
            <span>SISTec-R, Ratibad, Bhopal 462044</span>
          </div>
          <div className="announceCard">
            <img src="./images/announcement_tab_images/prizes.png" alt="" />
            <h3>Exciting Prizes</h3>
            <span>1st ₹ 25000/-</span><br />
            <span>2nd ₹ 20000/-</span><br />
            <span>3rd ₹ 15000/-</span>
            {/* <span>Get ready for exciting prizes</span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AnnouncementTab;
