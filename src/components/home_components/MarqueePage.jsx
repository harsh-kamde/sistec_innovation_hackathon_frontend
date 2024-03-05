import React from 'react';
import Marquee from 'react-fast-marquee';


const MarqueePage = ({ text }) => {
  return (
    <div className="marquee-container">
      <Marquee speed={60} gradient={false} pauseOnHover >
      <div className="marquee-text ">
      <img src="images/new.gif" width="100"height="40" alt="new"/>
       <h5> Note - Registration Dates Extened To 10/03/2024</h5>
       <img src="images/new.gif" width="100"height="40" alt="new"/>
        
       
        {/* <span>fgeyfjcsucyhbv</span> */}
      </div>
      <div className="marquee-text text2">
       
      </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
