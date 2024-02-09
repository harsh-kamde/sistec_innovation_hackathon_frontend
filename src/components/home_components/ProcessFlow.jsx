import React from "react";

const ProcessFlow = () => {
  return (
    <>
      <section className="sih-process" style={{marginBottom: '2rem'}}>
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <h2>Process Flow</h2>
            </div>

            {/* Right Side */}
            <div className="col-12 col-lg-6 d-flex justify-content-center flex-column align-items-start">
              <div className="process-flow">
                <img src="./images/process_flow.jpg" alt="Process Flow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessFlow;
