import React from "react";

const Prizes = () => {
  return (
    <>
      <section className="announcements prizes">
        <div className="paddings innerWidth flexCenter announce-container">
          <div className="announceCard">
            <img
              src="./images/Glimpse 2k23/Winners/Prizes/1st_prize.png"
              alt="1st Prize"
            />
            <h3>Team Matrix</h3>
            <span>₹ 25000/-</span>
          </div>
          <div className="announceCard">
            <img
              src="./images/Glimpse 2k23/Winners/Prizes/2nd_prize.png"
              alt="2nd Prize"
            />
            <h3>Team Hack Overflow</h3>
            <span>₹ 20000/-</span>
          </div>
          <div className="announceCard">
            <img
              src="./images/Glimpse 2k23/Winners/Prizes/3rd_prize.png"
              alt="3rd Prize"
            />
            <h3>Team Future Farmers</h3>
            <span>₹ 15000/-</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prizes;
