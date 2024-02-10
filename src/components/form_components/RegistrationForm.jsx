import React, { useState } from "react";
import "../../stylesheets/RegistrationFormStyle.css";
import Dropdown from "./Dropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../store/apiurl";
const URL = `${API_URL}/api/team/register`;

const RegistrationForm = () => {
  const [selectedTheme, setSelectedTheme] = useState("Choose Theme");
  const [selectedGender, setSelectedGender] = useState("Gender");
  const [member1Gender, setMember1Gender] = useState("Member 1 Gender");
  const [member2Gender, setMember2Gender] = useState("Member 2 Gender");
  const [member3Gender, setMember3Gender] = useState("Member 3 Gender");
  const [member4Gender, setMember4Gender] = useState("Member 4 Gender");

  const [isLoading, setIsLoading] = useState(false);

  const [teamData, setTeamData] = useState({
    leaderName: "",
    teamName: "",
    leaderPhone: "",
    leaderEmail: "",
    instituteName: "",
    // leaderGender: "",
    // theme: "",

    // Step-2 Fields (Team Members Details)
    member1Name: "",
    member1Email: "",
    // member1Gender: "",
    member1Phone: "",

    member2Name: "",
    member2Email: "",
    // member2Gender: "",
    member2Phone: "",

    member3Name: "",
    member3Email: "",
    // member3Gender: "",
    member3Phone: "",

    member4Name: "",
    member4Email: "",
    // member4Gender: "",
    member4Phone: "",

    // Step-3 Fields (Solution)
    PSCode: "",
    PSTitle: "",

    transaction_id: "",
  });

  //for handling the form fields
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTeamData({
      ...teamData,
      [name]: value,
    });
  };

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //for handling form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(teamData);
  //   console.log("Theme: "+selectedTheme);
  //   console.log("Leader gender: "+selectedGender);
  //   console.log("member1 gender: "+member1Gender);
  //   console.log("member2 gender: "+member2Gender);
  //   console.log("memeber3 gender: "+member3Gender);
  //   console.log("memeber4 gender: "+member4Gender);
  //   console.log(selectedFile);
  //   console.log(selectedFile2);
  //   console.log(selectedFile3);
  // };

  const gender = ["Male", "Female", "Other"];
  const themes = [
    "Agri-Tech",
    "Edu-Tech",
    "Environment & Climate",
    "Health-Tech",
    "Law & Order",
    "Miscellaneous",
    "Smart City",
    "Security",
  ];

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isFileSelected = selectedFile !== null;
  const isFileSelected2 = selectedFile2 !== null;
  const isFileSelected3 = selectedFile3 !== null;

  // To check that file size should not be more than 2 Mb and type should be only .pdf
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("File size should be less than 2MB");
      openModal();
      resetFileInput();
      return;
    }

    if (!file.type.match("application/pdf")) {
      setErrorMessage("Only PDF files are allowed");
      openModal();
      resetFileInput();
      return;
    }
    setSelectedFile(file);
  };

  // Reset input value for the file input field if it not satisfy the restriction
  const resetFileInput = () => {
    // Reset the file input by triggering a click event
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = null; // Clear the input value
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // To check that file size should not be more than 2 Mb and type should be only .jpg or .png or .jpeg
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("File size should be less than 2MB");
      openModal2();
      resetFileInput2();
      return;
    }

    if (!file.type.match("application/pdf")) {
      setErrorMessage("Only PDF files are allowed");
      openModal();
      resetFileInput2();
      return;
    }

    setSelectedFile2(file);
  };

  // Reset input value for the file input field if it not satisfy the restriction
  const resetFileInput2 = () => {
    // Reset the file input by triggering a click event
    const fileInput2 = document.getElementById("file-input2");
    if (fileInput2) {
      fileInput2.value = null; // Clear the input value
    }
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  // To check that file size should not be more than 2 Mb and type should be only .jpg or .png or .jpeg
  const handleFileChange3 = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("File size should be less than 2MB");
      openModal3();
      resetFileInput3();
      return;
    }

    setSelectedFile3(file);
  };

  // Reset input value for the file input field if it not satisfy the restriction
  const resetFileInput3 = () => {
    // Reset the file input by triggering a click event
    const fileInput3 = document.getElementById("file-input3");
    if (fileInput3) {
      fileInput3.value = null; // Clear the input value
    }
  };

  const openModal3 = () => {
    setModalOpen3(true);
  };

  const closeModal3 = () => {
    setModalOpen3(false);
  };

  // form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const id = toast.loading("Submitting Form");
    try {
      const formData = new FormData();
      const data = teamData;
      // Loop through the fields in the data object
      for (const field in data) {
        if (data.hasOwnProperty(field)) {
          formData.append(field, data[field]);
        }
      }
      //appending the rest fields
      formData.append("theme", selectedTheme);
      formData.append("leaderGender", selectedGender);
      formData.append("member1Gender", member1Gender);
      formData.append("member2Gender", member2Gender);
      formData.append("member3Gender", member3Gender);
      formData.append("member4Gender", member4Gender);

      // Append the files
      formData.append("ideaPPT", selectedFile);
      formData.append("consentLetter", selectedFile2);
      formData.append("paymentScreenshot", selectedFile3);

      const response = await fetch(URL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        // Redirect to the finished page on success
        console.log("Form submitted: " + response);
        toast.update(id, {
          render: "Team Registered Successfully :)",
          type: "success",
          isLoading: false,
        });
        setIsLoading(false);
        nextStep();
      } else {
        // Show an alert on failure
        toast.update(id, {
          render: "Failed to register! Please try again after some time",
          type: "error",
          isLoading: false,
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error during form submission:");
      toast.update(id, {
        render: "Something went Wrong!",
        type: "error",
        isLoading: false,
      });
      setIsLoading(false);
    }
  };

  return (
    <section className="form-wrap">
      <div className="form-container">
        <form onSubmit={handleSubmit} id="multi-step-form">
          <div
            id="form-container-box"
            style={{ display: step === 5 ? "none" : "block" }}
          >
            <h1 className="form-title">SIH 2.0 Registration Form</h1>
            <ul className="progress-bar">
              <li
                className={
                  step === 1 || step === 2 || step === 3 || step === 4
                    ? "active"
                    : ""
                }
              >
                Team Details
              </li>
              <li
                className={
                  step === 2 || step === 3 || step === 4
                    ? "active line-bar"
                    : "line-bar"
                }
              >
                Team Member Details
              </li>
              <li
                className={
                  step === 3 || step === 4 ? "active line-bar" : "line-bar"
                }
              >
                Solution
              </li>
              <li className={step === 4 ? "active line-bar" : "line-bar"}>
                Payment
              </li>
            </ul>

            {/* <<<<< Step 1 >>>>> */}
            <div
              className="step-group"
              style={{ display: step === 1 ? "block" : "none" }}
            >
              {/* Step 1 content */}
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Leader Name"
                    name="leaderName"
                    value={teamData.leaderName}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Team Name"
                    name="teamName"
                    value={teamData.teamName}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <Dropdown
                    selected={selectedTheme}
                    setSelected={setSelectedTheme}
                    options={themes}
                  />
                </div>
                <div class="form-group">
                  <Dropdown
                    selected={selectedGender}
                    setSelected={setSelectedGender}
                    options={gender}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-field"
                    placeholder="Leader phone"
                    name="leaderPhone"
                    value={teamData.leaderPhone}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-field"
                    placeholder="Leader Email"
                    name="leaderEmail"
                    value={teamData.leaderEmail}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Institute Name"
                    name="instituteName"
                    value={teamData.instituteName}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="form-box">
                <div className="btn-step">
                  <button type="button" onClick={nextStep}>
                    Next &#65515;
                  </button>
                </div>
              </div>
            </div>

            {/* <<<<< Step 2 >>>>> */}
            <div
              className="step-group"
              style={{ display: step === 2 ? "block" : "none" }}
            >
              {/* Member 1 Details */}
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Member 1 Name"
                    name="member1Name"
                    value={teamData.member1Name}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <Dropdown
                    selected={member1Gender}
                    setSelected={setMember1Gender}
                    options={gender}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-field"
                    placeholder="Member 1 Email"
                    name="member1Email"
                    value={teamData.member1Email}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-field"
                    placeholder="Member 1 Phone"
                    name="member1Phone"
                    value={teamData.member1Phone}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Member 2 Details */}
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Member 2 Name"
                    name="member2Name"
                    value={teamData.member2Name}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <Dropdown
                    selected={member2Gender}
                    setSelected={setMember2Gender}
                    options={gender}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-field"
                    placeholder="Member 2 Email"
                    name="member2Email"
                    value={teamData.member2Email}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-field"
                    placeholder="Member 2 Phone"
                    name="member2Phone"
                    value={teamData.member2Phone}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Member 3 Details */}
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Member 3 Name"
                    name="member3Name"
                    value={teamData.member3Name}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <Dropdown
                    selected={member3Gender}
                    setSelected={setMember3Gender}
                    options={gender}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-field"
                    placeholder="Member 3 Email"
                    name="member3Email"
                    value={teamData.member3Email}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-field"
                    placeholder="Member 3 Phone"
                    name="member3Phone"
                    value={teamData.member3Phone}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Member 4 Details */}
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="Member 4 Name"
                    name="member4Name"
                    value={teamData.member4Name}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <Dropdown
                    selected={member4Gender}
                    setSelected={setMember4Gender}
                    options={gender}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-field"
                    placeholder="Member 4 Email"
                    name="member4Email"
                    value={teamData.member4Email}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-field"
                    placeholder="Member 4 Phone"
                    name="member4Phone"
                    value={teamData.member4Phone}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="form-box">
                <div className="btn-step">
                  <button type="button" onClick={prevStep}>
                    &#65513; Prev
                  </button>
                  <button type="button" onClick={nextStep}>
                    Next &#65515;
                  </button>
                </div>
              </div>
            </div>

            {/* <<<<< Step 3 >>>>> */}
            <div
              className="step-group"
              style={{ display: step === 3 ? "block" : "none" }}
            >
              {/* Step 3 content */}
              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="PSID"
                    name="PSCode"
                    value={teamData.PSCode}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="PS Title"
                    name="PSTitle"
                    value={teamData.PSTitle}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div class="form-box">
                {/* First */}
                <div class="form-group drag-area">
                  <input
                    type="file"
                    name="file1"
                    style={{ display: "none" }}
                    id="file-input"
                    onChange={handleFileChange}
                    accept=".pdf"
                  />
                  <label htmlFor="file-input" className="custom-file-input">
                    Choose Idea PPT
                  </label>
                  <div className="file-name">
                    {selectedFile ? selectedFile.name : "No file chosen"}
                  </div>
                </div>

                {/* second */}
                <div class="form-group drag-area">
                  <input
                    type="file"
                    name="file2"
                    style={{ display: "none" }}
                    id="file-input2"
                    onChange={handleFileChange2}
                    accept=".pdf"
                  />
                  <label htmlFor="file-input2" className="custom-file-input">
                    Choose Consent Letter
                  </label>
                  <div className="file-name">
                    {selectedFile2 ? selectedFile2.name : "No file chosen"}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="form-box">
                <div className="btn-step">
                  <button type="button" onClick={prevStep}>
                    &#65513; Prev
                  </button>
                  <button type="button" onClick={nextStep}>
                    Next &#65515;
                  </button>
                </div>
              </div>
            </div>

            {/* <<<<< Step 4 >>>>> */}
            <div
              className="step-group"
              style={{ display: step === 4 ? "block" : "none" }}
            >
              {/* QR Code Image */}
              <div className="qr-code">
                <img src="./images/other/qr-code.png" alt="QR Code" />
              </div>

              <div class="form-box">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-field"
                    placeholder="UTR or Transaction ID"
                    name="transaction_id"
                    value={teamData.transaction_id}
                    onChange={handleInput}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div class="form-box">
                <div class="form-group drag-area">
                  <input
                    type="file"
                    name="file3"
                    style={{ display: "none" }}
                    id="file-input3"
                    onChange={handleFileChange3}
                    accept="image/*"
                  />
                  <label htmlFor="file-input3" className="custom-file-input">
                    Payment Screenshot
                  </label>
                  <div className="file-name">
                    {selectedFile3 ? selectedFile3.name : "No file chosen"}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="form-box">
                <div className="btn-step">
                  <button type="button" onClick={prevStep}>
                    &#65513; Prev
                  </button>
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Submit"} &#65515;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Success box */}
          <div
            id="success-box"
            style={{ display: step === 5 ? "flex" : "none" }}
          >
            <span className="done">&#10004;</span>
            <p className="success-text">
              Your Form has submitted successfully!
            </p>
            <button
              type="button"
              id="reset-btn"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
