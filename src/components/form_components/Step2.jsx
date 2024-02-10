import React from "react";
import Dropdown from "./Dropdown";

const Step2 = ({ step, nextStep, prevStep, formData, handleInputChange }) => {
  // const [member1Gender, setMember1Gender] = useState("Member 1 Gender");
  // const [member2Gender, setMember2Gender] = useState("Member 2 Gender");
  // const [member3Gender, setMember3Gender] = useState("Member 3 Gender");
  // const [member4Gender, setMember4Gender] = useState("Member 4 Gender");

  const gender = ["Male", "Female", "Other"];

  return (
    <>
      <div
        className="step-group"
        style={{ display: step === 2 ? "block" : "none" }}
      >
        {/* Member 1 Details */}
        <div className="label">Member 1 Details</div>
        <div className="form-box">
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="Member 1 Name"
              name="member1Name"
              value={formData.member1Name}
              onChange={(e) => handleInputChange("member1Name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <Dropdown
              selected={formData.member1Gender}
              setSelected={(option) =>
                handleInputChange("member1Gender", option)
              }
              options={gender}
              color={
                formData.member1Gender === "Member 1 Gender"
                  ? "#cac1ce"
                  : "var(--text-black-700)"
              }
            />
          </div>
        </div>

        <div className="form-box">
          <div className="form-group">
            <input
              type="email"
              className="form-field"
              placeholder="Member 1 Email"
              name="member1Email"
              value={formData.member1Email}
              onChange={(e) =>
                handleInputChange("member1Email", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-field"
              placeholder="Member 1 Phone"
              name="member1Phone"
              value={formData.member1Phone}
              onChange={(e) =>
                handleInputChange("member1Phone", e.target.value)
              }
            />
          </div>
        </div>

        {/* Member 2 Details */}
        <div className="label">Member 2 Details</div>
        <div className="form-box">
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="Member 2 Name"
              name="member2Name"
              value={formData.member2Name}
              onChange={(e) => handleInputChange("member2Name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <Dropdown
              selected={formData.member2Gender}
              setSelected={(option) =>
                handleInputChange("member2Gender", option)
              }
              options={gender}
              color={
                formData.member2Gender === "Member 2 Gender"
                  ? "#cac1ce"
                  : "var(--text-black-700)"
              }
            />
          </div>
        </div>

        <div className="form-box">
          <div className="form-group">
            <input
              type="email"
              className="form-field"
              placeholder="Member 2 Email"
              name="member2Email"
              value={formData.member2Email}
              onChange={(e) =>
                handleInputChange("member2Email", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-field"
              placeholder="Member 2 Phone"
              name="member2Phone"
              value={formData.member2Phone}
              onChange={(e) =>
                handleInputChange("member2Phone", e.target.value)
              }
            />
          </div>
        </div>

        {/* Member 3 Details */}
        <div className="label">Member 3 Details</div>
        <div className="form-box">
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="Member 3 Name"
              name="member3Name"
              value={formData.member3Name}
              onChange={(e) => handleInputChange("member3Name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <Dropdown
              selected={formData.member3Gender}
              setSelected={(option) =>
                handleInputChange("member3Gender", option)
              }
              options={gender}
              color={
                formData.member3Gender === "Member 3 Gender"
                  ? "#cac1ce"
                  : "var(--text-black-700)"
              }
            />
          </div>
        </div>

        <div className="form-box">
          <div className="form-group">
            <input
              type="email"
              className="form-field"
              placeholder="Member 3 Email"
              name="member3Email"
              value={formData.member3Email}
              onChange={(e) =>
                handleInputChange("member3Email", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-field"
              placeholder="Member 3 Phone"
              name="member3Phone"
              value={formData.member3Phone}
              onChange={(e) =>
                handleInputChange("member3Phone", e.target.value)
              }
            />
          </div>
        </div>

        {/* Member 4 Details */}
        <div className="label">Member 4 Details</div>
        <div className="form-box">
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="Member 4 Name"
              name="member4Name"
              value={formData.member4Name}
              onChange={(e) => handleInputChange("member4Name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <Dropdown
              selected={formData.member4Gender}
              setSelected={(option) =>
                handleInputChange("member4Gender", option)
              }
              options={gender}
              color={
                formData.member4Gender === "Member 4 Gender"
                  ? "#cac1ce"
                  : "var(--text-black-700)"
              }
            />
          </div>
        </div>

        <div className="form-box">
          <div className="form-group">
            <input
              type="email"
              className="form-field"
              placeholder="Member 4 Email"
              name="member4Email"
              value={formData.member4Email}
              onChange={(e) =>
                handleInputChange("member4Email", e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-field"
              placeholder="Member 4 Phone"
              name="member4Phone"
              value={formData.member4Phone}
              onChange={(e) =>
                handleInputChange("member4Phone", e.target.value)
              }
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="form-box">
          <div className="btn-step">
            <button type="button" onClick={prevStep}>
              &#129128; Prev
            </button>
            <button type="button" onClick={nextStep}>
              Next &#129130;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
