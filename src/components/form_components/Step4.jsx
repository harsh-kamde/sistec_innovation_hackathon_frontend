import React from "react";

const Step4 = ({
  formData,
  step,
  prevStep,
  nextStep,
  selectedTheme,
  selectedGender,
  member1Gender,
  member2Gender,
  member3Gender,
  member4Gender,
}) => {
  return (
    <>
      <div
        className="step-group"
        style={{ display: step === 4 ? "block" : "none" }}
      >
        {/* Step 1 Details */}
        <div className="review-title">Team Details</div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Leader Name</span>
            <span className="data-value">{formData.leaderName}</span>
          </div>

          <div className="form-group data">
            <span className="data-heading">Team Name</span>
            <span className="data-value">{formData.teamName}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Leader Gender</span>
            <span className="data-value">{selectedGender}</span>
          </div>

          <div className="form-group data">
            <span className="data-heading">Leader Phone</span>
            <span className="data-value">{formData.leaderPhone}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Leader Email</span>
            <span className="data-value">{formData.leaderEmail}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">selected Theme</span>
            <span className="data-value">{selectedTheme}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Institute Name</span>
            <span className="data-value">{formData.instituteName}</span>
          </div>
        </div>

        {/* Step 2 Details */}
        <div className="review-title">Team Member Details</div>

        {/* Member 1 Details */}
        <div className="label">Member 1 Details</div>
        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 1 Name</span>
            <span className="data-value">{formData.member1Name}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 1 Phone</span>
            <span className="data-value">{formData.member1Phone}</span>
          </div>

          <div className="form-group data">
            <span className="data-heading">Member 1 Gender</span>
            <span className="data-value">{member1Gender}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 1 Email</span>
            <span className="data-value">{formData.member1Email}</span>
          </div>
        </div>

        {/* Member 2 Details */}
        <div className="label">Member 2 Details</div>
        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 2 Name</span>
            <span className="data-value">{formData.member2Name}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 2 Phone</span>
            <span className="data-value">{formData.member2Phone}</span>
          </div>

          <div className="form-group data">
            <span className="data-heading">Member 2 Gender</span>
            <span className="data-value">{member2Gender}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 2 Email</span>
            <span className="data-value">{formData.member2Email}</span>
          </div>
        </div>

        {/* Member 3 Details */}
        <div className="label">Member 3 Details</div>
        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 3 Name</span>
            <span className="data-value">{formData.member3Name}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 3 Phone</span>
            <span className="data-value">{formData.member3Phone}</span>
          </div>

          <div className="form-group data">
            <span className="data-heading">Member 3 Gender</span>
            <span className="data-value">{member3Gender}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 3 Email</span>
            <span className="data-value">{formData.member3Email}</span>
          </div>
        </div>

        {/* Member 4 Details */}
        <div className="label">Member 4 Details</div>
        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 4 Name</span>
            <span className="data-value">{formData.member4Name}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 4 Phone</span>
            <span className="data-value">{formData.member4Phone}</span>
          </div>

          <div className="form-group data">
            <span className="data-heading">Member 4 Gender</span>
            <span className="data-value">{member4Gender}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">Member 4 Email</span>
            <span className="data-value">{formData.member4Email}</span>
          </div>
        </div>

        {/* Step 3 Details */}
        <div className="review-title">Problem Statement Details</div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">PSID</span>
            <span className="data-value">{formData.psid}</span>
          </div>
        </div>

        <div className="form-box">
          <div className="form-group data">
            <span className="data-heading">PS Title</span>
            <span className="data-value">{formData.psTitle}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="form-box">
          <div className="btn-step">
            <button type="button" onClick={prevStep}>
              &#129128; Prev
            </button>
            <button type="button" onClick={nextStep}>
              Submit &#129130;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
