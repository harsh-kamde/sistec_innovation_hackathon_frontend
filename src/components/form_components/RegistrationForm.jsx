import React, { useState } from "react";
import "../../stylesheets/RegistrationFormStyle.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Finish from "./Finish";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  // State to store form data
  const [formData, setFormData] = useState({
    // Step 1 fields
    leaderName: "",
    teamName: "",
    leaderPhone: "",
    leaderEmail: "",
    instituteName: "",
    selectedTheme: "Choose Theme",
    selectedGender: "Leader Gender",

    // Step 2 fields
    member1Name: "",
    member2Name: "",
    member3Name: "",
    member4Name: "",
    member1Gender: "Member 1 Gender",
    member2Gender: "Member 2 Gender",
    member3Gender: "Member 3 Gender",
    member4Gender: "Member 4 Gender",
    member1Email: "",
    member2Email: "",
    member3Email: "",
    member4Email: "",
    member1Phone: "",
    member2Phone: "",
    member3Phone: "",
    member4Phone: "",

    // Step 3 fields
    psid: "",
    psTitle: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="form-wrap">
      <div className="form-container">
        <form onSubmit={handleSubmit} id="multi-step-form">
          <div
            id="form-container-box"
            style={{ display: step === 6 ? "none" : "block" }}
          >
            <h1 className="form-title">SIH 2.0 Registration Form</h1>
            <ul className="progress-bar">
              <li
                className={
                  step === 1 ||
                  step === 2 ||
                  step === 3 ||
                  step === 4 ||
                  step === 5
                    ? "active"
                    : ""
                }
              >
                Team Details
              </li>
              <li
                className={
                  step === 2 || step === 3 || step === 4 || step === 5
                    ? "active line-bar"
                    : "line-bar"
                }
              >
                Team Member Details
              </li>
              <li
                className={
                  step === 3 || step === 4 || step === 5
                    ? "active line-bar"
                    : "line-bar"
                }
              >
                Solution
              </li>
              <li
                className={
                  step === 4 || step === 5 ? "active line-bar" : "line-bar"
                }
              >
                Review Details
              </li>
              <li className={step === 5 ? "active line-bar" : "line-bar"}>
                Payment
              </li>
            </ul>

            {/* <<<<< Step 1 >>>>> */}
            <Step1
              step={step}
              nextStep={nextStep}
              formData={formData}
              handleInputChange={handleInputChange}
            />

            {/* <<<<< Step 2 >>>>> */}
            <Step2
              step={step}
              nextStep={nextStep}
              prevStep={prevStep}
              formData={formData}
              handleInputChange={handleInputChange}
            />

            {/* <<<<< Step 3 >>>>> */}
            <Step3
              step={step}
              nextStep={nextStep}
              prevStep={prevStep}
              formData={formData}
              handleInputChange={handleInputChange}
            />

            {/* <<<<< Step 4 >>>>> */}
            <Step4
              formData={formData}
              step={step}
              nextStep={nextStep}
              prevStep={prevStep}
              selectedTheme={formData.selectedTheme}
              selectedGender={formData.selectedGender}
              member1Gender={formData.member1Gender}
              member2Gender={formData.member2Gender}
              member3Gender={formData.member3Gender}
              member4Gender={formData.member4Gender}
            />

            {/* <<<<< Step 5 >>>>> */}
            <Step5 step={step} prevStep={prevStep} nextStep={nextStep} />
          </div>

          {/* Finish */}
          <Finish step={step} />
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
