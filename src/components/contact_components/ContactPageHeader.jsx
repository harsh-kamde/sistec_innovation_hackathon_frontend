import React from "react";
import "../../stylesheets/ContactUsStyle.css";

const ContactPageHeader = () => {
  return (
    <>
      <section className="contact margin-top-ultra-max">
        <div className="container">
          <h3 className="contact-title pad-15">HAVE YOU ANY QUESTION?</h3>
          <h4 className="contact-sub-title pad-15">
            WE ARE ALWAYS AT YOUR SERVICES
          </h4>

          <div className="row">
            {/* <!-- Contact Info item --> */}
            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Helpline Number</h4>
              <p>+91 7879261234<br/>
              +91 9827666677<br/>
              +91 9584471159</p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-map"></i>
              </div>
              <h4>Address</h4>
              <p>
                SISTec-R Sikandrabad, Ratibad, <br />
                Bhopal, Madhya Pradesh <br />
                462044
              </p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>rohitbansal@sistec.ac.in<br/>
              himanshuyadav@sistec.ac.in<br/>
              amitsahu@sistec.ac.in</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPageHeader;
